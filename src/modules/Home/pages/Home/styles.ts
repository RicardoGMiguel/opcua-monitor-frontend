import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-80px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  animation: ${appearFromLeft} 0.6s;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ClearButtonContainer = styled.div`
  align-self: flex-end;
`;
