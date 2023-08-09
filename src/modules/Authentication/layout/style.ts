import styled, { keyframes } from 'styled-components';

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px)
  }
  to {
    opacity: 1;
    transform: translateY(0)
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100vw;
  animation: ${appearFromBottom} 0.6s;
`;
