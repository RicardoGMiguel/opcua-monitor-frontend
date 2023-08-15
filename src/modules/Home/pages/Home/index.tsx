import React, { useState, useEffect, useCallback } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { format } from 'date-fns';
import { MdRefresh, IoMdTrash } from 'react-icons/all';
import { useMessage } from '../../../../hooks/messages';
import { IGraphMessage } from '../../../../interfaces';
import { Container, Content, ClearButtonContainer } from './styles';
import SpinnerLoader from '../../../../components/SpinnerLoader';

const Home: React.FC = () => {
  const { GetMessages, ClearMessages } = useMessage();
  const [messages, setMessages] = useState<IGraphMessage[]>([]);

  const { data, refetch, isFetching } = GetMessages();

  useEffect(() => {
    if (data) {
      const graphData: IGraphMessage[] = data.map(message => {
        const formattedMessage = {
          value: message.value,
          created_at: format(new Date(message.created_at), 'dd/MM/yyyy - HH:mm:ss'),
        };
        return formattedMessage;
      });
      setMessages(graphData);
    }
  }, [data]);

  const HandleClear = useCallback(async () => {
    ClearMessages();
  }, [ClearMessages]);

  return (
    <Container>
      <ClearButtonContainer>
        <IoMdTrash size={35} onClick={HandleClear} />
        <MdRefresh size={35} onClick={() => refetch()} />
      </ClearButtonContainer>
      {isFetching ? (
        <SpinnerLoader />
      ) : (
        <>
          {messages?.length > 0 ? (
            <Content>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={messages}>
                  <CartesianGrid stroke="#F0F0F0" />
                  <XAxis dataKey="created_at" fontSize={16} color="#A3A3A3" minTickGap={100} />
                  <YAxis fontSize={16} color="#A3A3A3" domain={[0, 'dataMax']} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" name="value" dataKey="value" stroke="#C00418" strokeWidth={2} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </Content>
          ) : (
            <Content>
              <h1>Nenhum dado recebido</h1>
            </Content>
          )}
        </>
      )}
    </Container>
  );
};

export default Home;
