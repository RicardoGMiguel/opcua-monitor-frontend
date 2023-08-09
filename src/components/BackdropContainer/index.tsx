import React from 'react';
import { useSpring } from 'react-spring';
import { BiLeftArrowAlt } from 'react-icons/bi';

import { BackdropInformations, useBackdrop } from '../../hooks/backdrop';

import { Container, ActionButtons, CancelButtons } from './styles';

const BackdropContainer: React.FC<BackdropInformations> = ({ show, text, onConfirm, type }) => {
  const { removeBackdrop } = useBackdrop();

  const animationTransition = useSpring({
    to: { opacity: show ? 1 : 0, top: show ? '0' : '-110vh' },
    from: { opacity: 1, top: '-110vh' },
  });

  return (
    <Container style={animationTransition}>
      <div className="title">
        <button type="button" className="arrowCircle" onClick={removeBackdrop}>
          <BiLeftArrowAlt />
        </button>
      </div>

      <div className="message" style={{ whiteSpace: 'pre-line' }}>
        <p>{text}</p>
        <div className="buttonContainer">
          <ActionButtons onClick={onConfirm}>confirmar</ActionButtons>
          <CancelButtons type="button" onClick={removeBackdrop}>
            Cancelar
          </CancelButtons>
        </div>
      </div>
    </Container>
  );
};

export default BackdropContainer;
