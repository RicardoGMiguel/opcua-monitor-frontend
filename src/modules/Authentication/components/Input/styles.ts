/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import InputMask from 'react-input-mask';
import colors from '../../../../style/colors';
import Tooltip from '../../../../components/Tooltip';

interface ContainerInterface {
  isError: boolean;
  disabled?: boolean;
}

export const InputComp = styled(InputMask)`
  background: transparent !important;
`;

export const Container = styled.div<ContainerInterface>`
  display: flex;
  width: 100%;
  height: 2.5rem;
  align-items: center;
  align-content: center;
  border: 1.5px solid ${colors.secondary};
  padding: 0.5rem;
  background: ${colors.inputBackground};
  box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin-bottom: 1rem;

  ${props =>
    props.isError &&
    css`
      border-color: ${colors.danger};
    `}
  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background-color: ${colors.inputBackground};
      color: ${colors.inactive};
    `}
    input:-webkit-autofill,
    textarea:-webkit-autofill,

  input {
    font-size: 1.2rem;
    flex: 1;
    width: 80%;
    background: transparent;
    border: 0;
    color: ${colors.text};
    &::placeholder {
      color: ${colors.placeholder};
    }
    ${props =>
    props.disabled &&
    css`
        cursor: not-allowed;
        color: ${colors.inactive};
      `}
  }
  @media (max-width: 600px) {
    input {
      font-size: 1rem;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: ${colors.danger};
    color: ${colors.lightText};

    &::before {
      border-color: ${colors.danger} transparent;
    }
  }
`;

export const ShowPasswordButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
