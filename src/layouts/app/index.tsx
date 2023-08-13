import React from 'react';
import Header from '../../components/Header';
import { Container, PageBody, PageContainer } from './styles';

const AppLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <PageBody>
        <PageContainer>{children}</PageContainer>
      </PageBody>
    </Container>
  );
};

export default AppLayout;
