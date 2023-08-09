import styled, { css } from 'styled-components';
import InputMask from 'react-input-mask';
import colors from '../../../../style/colors';

interface ContainerInterface {
  isError: boolean;
  disabled?: boolean;
}

export const InputComp = styled(InputMask)`
  background: transparent !important;
`;

export const Separator = styled.div`
  height: 40px;
  width: 1px;
  background: ${colors.loginInputColor};
  margin-right: 10px;
  margin-left: 5px;
`;

export const Container = styled.div<ContainerInterface>`
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  margin-bottom: 33px;
  border-bottom: ${colors.loginInputColor} solid 1px;
  ${props =>
    props.isError &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background-color: #f8f8f8;
      color: #e0e0e0;
    `}
    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px ${colors.secondary} inset !important;
    -webkit-text-fill-color: black !important;
  }
  input {
    font-size: 1.2em;
    flex: 1;
    width: 80%;
    background: transparent;
    border: 0;
    color: #e0e0e0;
    &::placeholder {
      color: ${colors.loginInputColor};
    }
    ${props =>
      props.disabled &&
      css`
        cursor: not-allowed;
        color: #e0e0e0;
      `}
  }
  @media (max-width: 600px) {
    input {
      font-size: 1rem;
    }
  }
`;
