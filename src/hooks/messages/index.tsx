/* eslint-disable no-unused-vars */
import React, { createContext, useContext } from 'react';

import { useMutation, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult, QueryKey } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { api, apiRoutes } from '../../services/api';
import { useToast } from '../toast';
import { IMessage } from '../../interfaces';
import { queryClient } from '../../services/queryClient';

interface useMessageParams {
  options?: UseQueryOptions<IMessage[]>;
}

interface MessageContextData {
  GetMessages(options?: useMessageParams): UseQueryResult<IMessage[]>;
  ClearMessages(): Promise<void>;
}

const MessageContext = createContext<MessageContextData>({} as MessageContextData);

const MessageProvider: React.FC = ({ children }) => {
  const { addToast } = useToast();

  const GetMessages = ({ options } = {} as useMessageParams): UseQueryResult<IMessage[]> => {
    return useQuery(
      ['MESSAGES'] as QueryKey,
      async () => {
        const { data } = await api.get<IMessage[]>(apiRoutes.messages);

        return data;
      },
      {
        // change the key so data can update
        staleTime: 1000 * 60, // 10min
        refetchInterval: 1000,
        ...options,
      },
    );
  };

  const ClearMessages = useMutation(
    async () => {
      await api.delete(`${apiRoutes.messages}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['MESSAGES']);
        addToast({
          title: 'Mensagens excluídas!',
          description: 'As mensagens foram excluídas com sucesso',
          type: 'success',
        });
      },
      onError: (error: AxiosError) => {
        addToast({
          title: 'Ocorreu um erro!',
          description: error.response?.data.message,
          type: 'error',
        });
      },
    },
  ).mutateAsync;

  return <MessageContext.Provider value={{ GetMessages, ClearMessages }}>{children}</MessageContext.Provider>;
};

function useMessage(): MessageContextData {
  const context = useContext(MessageContext);

  if (!context) {
    throw new Error('useMessage must be used within a MessageProvider');
  }

  return context;
}

export { MessageProvider, useMessage };
