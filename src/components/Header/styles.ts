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

  @media (max-width: 900px) {
    padding: 1.2rem;
    height: 9vh;
  }

  @media (max-width: 400px) {
    padding: 1rem;
    height: 8vh;
  }
`;

export const LogoContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    width: 60%;
  }

  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const LogoImg = styled.img`
  width: 170px;

  @media (max-width: 900px) {
    width: 100px;
  }

  @media (max-width: 600px) {
    width: 70px;
  }
`;

export const DateTimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: 15%;
  height: 1.8rem;
  margin-right: 20px;

  @media (max-width: 900px) {
    width: 25%;
  }

  @media (max-width: 400px) {
    display: none;
  }

  > div {
    display: flex;
    align-items: center;

    svg {
      color: ${colors.iconColor};
      height: 100%;
      margin-right: 0.5rem;
    }

    > h1 {
      font-size: 1.2rem;
      color: ${colors.text};
      margin: 0;

      @media (max-width: 900px) {
        font-size: 1rem;
      }
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
