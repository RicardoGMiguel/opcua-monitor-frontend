import { shade } from 'polished';
import styled, { css } from 'styled-components';
import Button from '../../Button';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 2em;
  color: ${props => props.theme.colors.primary};
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
`;

export const OptionsButton = styled(Button)<{ danger: boolean }>`
  margin: 10px 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  ${props =>
    props.danger &&
    css`
      background-color: ${({ theme }) => theme.colors.danger};

      :hover {
        background-color: ${shade(0.3, `${props.theme.colors.danger}`)};
      }
    `};
`;
