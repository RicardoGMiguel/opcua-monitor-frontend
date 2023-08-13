import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number;
  secundary?: boolean;
}

const Button: React.FC<InputProps> = ({ children, width, secundary, ...rest }) => (
  <Container type="submit" {...rest} width={width} secundary={secundary}>
    {children}
  </Container>
);

Button.defaultProps = {
  width: 200,
  secundary: false,
};
export default Button;
