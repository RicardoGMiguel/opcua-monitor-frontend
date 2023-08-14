import React from 'react';
import { Loader } from 'semantic-ui-react';
import { Container } from './styles';

const SpinnerLoader: React.FC = () => {
  return (
    <Container>
      <Loader active inline size="massive">
        Carregando
      </Loader>
    </Container>
  );
};

export default SpinnerLoader;
