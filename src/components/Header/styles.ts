import styled from 'styled-components';
import colors from '../../style/colors';

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;

export const LogoContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImg = styled.img`
  width: 220px;
  @media (max-width: 600px) {
    width: 800px;
  }
`;

export const DateTimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: 15%;
  height: 2.8rem;
  margin-right: 20px;

  > div {
    display: flex;
    align-items: center;

    svg {
      color: ${colors.iconColor};
      height: 100%;
      margin-right: 0.5rem;
    }

    > h1 {
      font-size: 1.4rem;
      color: ${colors.text};
    }
  }
`;

export const LogoutButton = styled.div`
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
  }

  svg {
    color: ${colors.iconColor};
  }
`;
