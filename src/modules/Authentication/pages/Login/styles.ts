import { shade } from 'polished';
import styled from 'styled-components';
import Button from '../../../../components/Button';
import Colors from '../../../../style/colors';

export const LoginButton = styled(Button)`
  background-color: ${Colors.secondary};
  border-radius: 10px;
  width: 400px;
  height: 60px;
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

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const BackgroundImg = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -999;
`;

export const BackgroundMask = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -998;
  background: ${Colors.loginBackgroundMask};
  opacity: 0.8;
`;

export const LogosContainer = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImg = styled.img`
  width: 380px;
  @media (max-width: 600px) {
    width: 250px;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  form {
    width: 400px;
    text-align: center;

    @media (max-width: 600px) {
      width: 250px;
    }
  }
`;
