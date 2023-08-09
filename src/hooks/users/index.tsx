/* eslint-disable no-unused-vars */
import React, { createContext, useContext } from 'react';

import { useMutation, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult, QueryKey } from '@tanstack/react-query';
import { api, apiRoutes } from '../../services/api';
import { useToast } from '../toast';
import { IUser } from '../../interfaces';
import { queryClient } from '../../services/queryClient';

interface IUpdateUserData {
  id: string;
  type?: 'administrator' | 'user';
  old_password?: string;
  password?: string;
  confirm_password?: string;
}

interface ICreateUserData {
  name: string;
  email: string;
  type: 'administrator' | 'user';
}

interface useUserParams {
  options?: UseQueryOptions<IUser[]>;
}

interface UserContextData {
  GetUsers(options?: useUserParams): UseQueryResult<IUser[]>;
  DeleteUser(user_id: string): UseMutationResult<IUser>;
  UpdateUser(user_data: IUpdateUserData): UseMutationResult<IUser>;
  CreateUser(user_data: ICreateUserData): UseMutationResult<IUser>;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {
  const { addToast } = useToast();

  const GetUsers = ({ options } = {} as useUserParams): UseQueryResult<IUser[]> => {
    return useQuery(
      ['USERS'] as QueryKey,
      async () => {
        const { data } = await api.get<IUser[]>(apiRoutes.users);

        return data;
      },
      {
        // change the key so data can update
        staleTime: 1000 * 60 * 10, // 10min
        ...options,
      },
    );
  };

  const DeleteUser = (user_id: string): UseMutationResult<IUser> => {
    return useMutation(
      async () => {
        const { data } = await api.delete(`${apiRoutes.users}/${user_id}`);

        return data;
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['USERS']);
          addToast({
            title: 'Usuario deletado!',
            description: 'Ocorreu uma falha ao desativar user',
            type: 'error',
          });
        },
        onError: () => {
          addToast({
            title: 'Ocorreu um erro!',
            description: 'Ocorreu uma falha ao excluir user',
            type: 'error',
          });
        },
      },
    );
  };

  const UpdateUser = (user_data: IUpdateUserData): UseMutationResult<IUser> => {
    const { id, ...dataToSend } = user_data;
    return useMutation(
      async () => {
        const { data } = await api.put(`${apiRoutes.users}/${id}`, dataToSend);

        return data;
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['USERS']);
          addToast({
            title: 'Usuario deletado!',
            description: 'Ocorreu uma falha ao desativar user',
            type: 'error',
          });
        },
        onError: () => {
          addToast({
            title: 'Ocorreu um erro!',
            description: 'Ocorreu uma falha ao excluir user',
            type: 'error',
          });
        },
      },
    );
  };

  const CreateUser = ({ name, type, email }: ICreateUserData): UseMutationResult<IUser> => {
    return useMutation(
      async () => {
        const { data } = await api.post(`${apiRoutes.users}`, {
          name,
          type,
          email,
        });

        return data;
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['USERS']);
          addToast({
            title: 'Usuario Criado!',
            description: 'O usuario foi criado!',
            type: 'error',
          });
        },
        onError: () => {
          addToast({
            title: 'Ocorreu um erro!',
            description: 'Ocorreu uma falha ao criar um novo usuario',
            type: 'error',
          });
        },
      },
    );
  };

  return <UserContext.Provider value={{ GetUsers, DeleteUser, UpdateUser, CreateUser }}>{children}</UserContext.Provider>;
};

function useUser(): UserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
}

export { UserProvider, useUser };
