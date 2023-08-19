import styled, { css, keyframes } from 'styled-components';

const openAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div<{ $visible: boolean }>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #6f778230;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3000;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  animation: ${openAnimation} 0.6s;

  ${props =>
    !props.$visible &&
    css`
      display: none;
    `}
`;
