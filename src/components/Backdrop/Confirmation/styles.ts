import { shade } from 'polished';
import styled, { css } from 'styled-components';
import Button from '../../Button';
import colors from '../../../style/colors';

export const Container = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.background};
  border-radius: 1rem;
  padding: 2rem 5rem 2rem 5rem;
`;

export const Title = styled.h2`
  font-size: 1.8em;
  color: ${colors.text};
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

// eslint-disable-next-line prettier/prettier
export const OptionsButton = styled(Button) <{ danger: boolean }>`
  margin: 10px 10px;
  background-color: ${colors.secondary};
  :hover {
    background-color: ${shade(0.3, colors.secondary)};
  }
  ${props =>
    props.danger &&
    css`
      background-color: ${colors.danger};

      :hover {
        background-color: ${shade(0.3, colors.danger)};
      }
    `};
`;
