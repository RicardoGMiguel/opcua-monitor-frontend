import React, { useState, useCallback } from 'react';
import { format } from 'date-fns';
import { MdDateRange, FaRegClock, FiLogOut } from 'react-icons/all';
import opcuaImg from '../../assets/opcua-logo.png';
import mqttImg from '../../assets/mqtt-logo.png';
import azureImg from '../../assets/azure-logo.png';
import dockerImg from '../../assets/docker-logo.png';
import { useAuth } from '../../modules/Authentication/hooks/auth';
import Confirmation from '../Backdrop/Confirmation';
import { useBackdrop } from '../../hooks/backdrop';

import { Container, LogoContainer, LogoImg, DateTimeContainer, LogoutButton } from './styles';

const Header: React.FC = ({ ...rest }) => {
  const { signOut } = useAuth();
  const { showBackdrop } = useBackdrop();
  const [dateNow, setDateNow] = useState(new Date(Date.now()));

  const updateClock = useCallback(() => {
    setDateNow(new Date(Date.now()));
  }, []);

  setTimeout(updateClock, 1000);

  const HandleSignOut = useCallback(() => {
    showBackdrop(
      <Confirmation
        title="Deseja sair?"
        onConfirm={async () => {
          signOut();
        }}
      />,
    );
  }, [showBackdrop, signOut]);

  return (
    <Container {...rest}>
      <LogoContainer>
        <LogoImg src={opcuaImg} alt="opcua" />
        <LogoImg src={mqttImg} alt="mqtt" />
        <LogoImg src={azureImg} alt="azure" />
        <LogoImg src={dockerImg} alt="docker" />
      </LogoContainer>
      <DateTimeContainer>
        <div>
          <MdDateRange size={20} />
          <h1>{format(dateNow, 'dd/MM/yyyy')}</h1>
        </div>
        <div>
          <FaRegClock size={20} />
          <h1>{format(dateNow, 'HH:mm:ss')}</h1>
        </div>
      </DateTimeContainer>
      <LogoutButton onClick={HandleSignOut}>
        <FiLogOut size={25} />
      </LogoutButton>
    </Container>
  );
};

export default Header;
