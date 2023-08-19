import React from 'react';
import { useBackdrop } from '../../../hooks/backdrop';
import { Container, Title, ButtonsContainer, OptionsButton } from './styles';

interface IProps {
  title: string;
  multiButtons: {
    label: string;
    onClick: () => void;
  }[];
}

const MultiButtonsOptions: React.FC<IProps> = ({ title, multiButtons }) => {
  const { hidePage } = useBackdrop();

  return (
    <Container>
      <Title>{title}</Title>
      <ButtonsContainer>
        {multiButtons.map(button => (
          <OptionsButton
            danger={false}
            key={`Options_${button.label}`}
            onClick={() => {
              button.onClick();
              hidePage();
            }}
          >
            {button.label}
          </OptionsButton>
        ))}
        <OptionsButton danger onClick={hidePage}>
          Cancelar
        </OptionsButton>
      </ButtonsContainer>
    </Container>
  );
};

export default MultiButtonsOptions;
