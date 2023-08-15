import styled, { keyframes } from 'styled-components';
import colors from '../../../../style/colors';

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
  width: 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media (max-width: 900px) {
    width: 12%;
  }

  @media (max-width: 400px) {
    width: 30%;
  }

  svg {
    color: ${colors.iconColor};
    :hover {
      cursor: pointer;
    }
  }
`;
