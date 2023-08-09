import styled from 'styled-components';
import { animated } from 'react-spring';
import Button from '../Button';

export const ActionButtons = styled(Button)`
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const CancelButtons = styled.button`
  background: none;
  color: #03254c;
  text-decoration: underline;
  font-size: 1.6em;
`;

export const Container = styled(animated.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #6f778230;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  z-index: 999;

  & div.title {
    display: flex;
    width: 100%;
    padding: 50px 30px;
    justify-content: space-between;
    p::before {
      content: '';
      background-color: #fe0000;
      padding: 2px;
      margin-right: 10px;
    }

    & p {
      color: #fff;
      font-size: 1.6em;
      text-transform: uppercase;
      & strong {
        font-weight: bold;
      }
    }

    & button.arrowCircle {
      width: 2.8em;
      height: 2.8em;
      border-radius: 50%;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        color: #2a9df4;
        font-size: 25px;
      }
    }
  }

  & div.message {
    margin-top: -50px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    & p {
      color: #03254c;
      font-size: 1.6em;
      width: 60%;
      text-align: center;
    }

    & div.buttonContainer {
      padding-top: 40px;
      width: 60%;
      display: flex;
      justify-content: space-evenly;
    }
  }

  @media (max-width: 1280px) {
    & div.message {
      & p {
        width: 70%;
      }
      & div.buttonContainer {
        width: 70%;
      }
    }
  }

  @media (max-width: 960px) {
    & div.message {
      & p {
        width: 80%;
      }
      & div.buttonContainer {
        width: 80%;
      }
    }
  }

  @media (max-width: 600px) {
    & div.message {
      & p {
        width: 90%;
      }
      & div.buttonContainer {
        flex-direction: column;
        align-items: center;
        width: 90%;
      }
    }
  }
`;
