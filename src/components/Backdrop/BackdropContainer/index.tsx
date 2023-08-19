import React from 'react';

import { Container } from './styles';

const MobileBackdrop: React.FC<{ visible: boolean }> = ({ visible, children }) => {
  return <Container $visible={visible}>{children}</Container>;
};

export default MobileBackdrop;
