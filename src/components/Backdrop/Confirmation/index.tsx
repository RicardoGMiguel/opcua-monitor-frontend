import React from 'react';
import { IconType } from 'react-icons';
import colors from '../../../style/colors';
import { useBackdrop } from '../../../hooks/backdrop';
import { Container, Title, ButtonsContainer, OptionsButton } from './styles';

interface IProps {
  title: string;
  Icon?: IconType;
  iconColor?: string;
  onConfirm: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  danger?: boolean;
}

const Confirmation: React.FC<IProps> = ({ title, Icon, iconColor, onConfirm, danger, confirmLabel, cancelLabel }) => {
  const { hidePage } = useBackdrop();

  return (
    <Container>
      {Icon && <Icon size={80} color={iconColor} />}
      <Title>{title}</Title>
      <ButtonsContainer>
        <OptionsButton danger onClick={hidePage}>
          {cancelLabel || 'Cancelar'}
        </OptionsButton>
        <OptionsButton
          danger={danger || false}
          onClick={() => {
            hidePage();
            onConfirm();
          }}
        >
          {confirmLabel || 'Confirmar'}
        </OptionsButton>
      </ButtonsContainer>
    </Container>
  );
};

Confirmation.defaultProps = {
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
  danger: false,
};

export default Confirmation;

Confirmation.defaultProps = {
  Icon: undefined,
  iconColor: colors.text,
};
