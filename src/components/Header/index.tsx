import React from 'react';

import { Container } from './styles';

const Header: React.FC = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <h1>Header</h1>
    </Container>
  );
};

export default Header;
