import { shade } from 'polished';
import styled from 'styled-components';
import Button from '../../../../components/Button';
import Colors from '../../../../style/colors';
import signInBackgroungImg from '../../../../assets/background.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 700px;

  form {
    width: 50%;
    text-align: center;

    @media (max-width: 600px) {
      width: 80%;
    }
  }
`;

export const LoginButton = styled(Button)`
  background-color: ${Colors.secondary};
  border-radius: 10px;
  width: 30%;
  height: 45px;
  max-width: 400px;
  @media (max-width: 600px) {
    width: 250px;
  }
  &:hover {
    background: ${shade(0.1, Colors.secondary)};
  }
  &::disabled {
    background: '#0ff';
  }
`;

export const LogosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;

  > div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const LogoImg = styled.img`
  width: 250px;

  @media (max-width: 600px) {
    width: 150px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroungImg}) no-repeat center;
  background-size: cover;
`;
