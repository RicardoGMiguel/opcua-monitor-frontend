import styled, { keyframes } from 'styled-components';
import colors from '../../style/colors';

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
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  * {
    font-family: 'Lato', sans-serif;
  }
`;

export const PageBody = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 2.5rem;
  position: relative;
  overflow-x: none;
  animation: ${appearFromLeft} 0.6s;

  @media (max-width: 900px) {
    padding: 1.5rem;
  }
`;
