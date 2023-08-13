/* eslint-disable no-unused-vars */
import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';

import { IUser } from '../../../../interfaces';

import { api, configureApi } from '../../../../services/api';
import { useToast } from '../../../../hooks/toast';

interface AuthState {
  user: IUser;
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  user: IUser;
  updateUser(user: IUser): Promise<void>;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(message?: string): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const storageVariables = {
  token: '@Opcua_Monitor:token',
  user: '@Opcua_Monitor:user',
};

const AuthProvider: React.FC = ({ children }) => {
  const { addToast } = useToast();

  const signOut = useCallback(
    (message?: string) => {
      localStorage.removeItem(storageVariables.token);
      localStorage.removeItem(storageVariables.user);
      if (message) {
        addToast({
          title: 'Erro de autenticação',
          type: 'error',
          description: message,
        });
      }

      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      setData({} as AuthState);
    },
    [addToast],
  );

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem(storageVariables.token);
    const user = localStorage.getItem(storageVariables.user);

    if (token && user) {
      configureApi(token, signOut);

      const parsedUser = JSON.parse(user);

      return { user: parsedUser };
    }

    return {} as AuthState;
  });

  useEffect(() => {
    const user = localStorage.getItem(storageVariables.user);
    if (user) {
      const parsedUser: IUser = JSON.parse(user);
      setData({ user: parsedUser });
    }
  }, []);

  const updateUser = useCallback(async user => {
    localStorage.setItem(storageVariables.user, JSON.stringify(user));
    setData({ user });
  }, []);

  const signIn = useCallback(
    async ({ email, password }) => {
      const response = await api.post('sessions', { email, password });

      const { token, user } = response.data;

      localStorage.setItem(storageVariables.token, token);
      localStorage.setItem(storageVariables.user, JSON.stringify(user));

      configureApi(token, signOut);

      setData({ user });
    },
    [signOut],
  );
  return <AuthContext.Provider value={{ user: data.user, signIn, signOut, updateUser }}>{children}</AuthContext.Provider>;
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
