import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IContainer {
  width?: number;
  secundary?: boolean;
}

export const Container = styled.button<IContainer>`
  background-color: #2a9df4;
  color: #fff;
  max-width: 300px;
  width: 280px;
  padding: 8px 0;
  text-transform: uppercase;
  border-radius: 10px;
  font-weight: 500;
  font-size: 1.2em;

  &:hover {
    background: ${shade(0.1, '#2A9DF4')};
  }

  ${props =>
    props.disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      background-color: #efefef;
    `}

  ${props =>
    props.width &&
    css`
      width: ${props.width}px;
    `}

  @media (max-width: 1280px) {
    max-width: 270px;
    width: 250px;
  }

  @media (max-width: 960px) {
    max-width: 250px;
    width: 230px;
  }

  @media (max-width: 600px) {
    max-width: 230px;
    width: 200px;
  }

  ${props =>
    props.secundary &&
    css`
      background: #fff;
      color: #2a9df4;
      margin-bottom: 4px;
      border: 2px solid #2a9df4;

      &:hover {
        background: ${shade(0.1, '#FFF')};
      }
    `}
`;
