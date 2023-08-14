import React from 'react';

import { ToastProvider } from './toast';
import { BackdropProvider } from './backdrop';
import { UserProvider } from './users';
import { MessageProvider } from './messages';
import { AuthProvider } from '../modules/Authentication/hooks/auth';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ToastProvider>
      <BackdropProvider>
        <AuthProvider>
          <UserProvider>
            <MessageProvider>{children}</MessageProvider>
          </UserProvider>
        </AuthProvider>
      </BackdropProvider>
    </ToastProvider>
  );
};

export default AppProvider;
