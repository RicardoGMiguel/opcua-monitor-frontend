import React, { useRef, useCallback, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import { FiUser, FiUnlock } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../../../hooks/toast';
import getValidationErrors from '../../../../utils/getValidationsErrors';

import opcuaImg from '../../../../assets/opcua-logo.png';
import mqttImg from '../../../../assets/mqtt-logo.png';
import azureImg from '../../../../assets/azure-logo.png';
import dockerImg from '../../../../assets/docker-logo.png';

import Input, { InputRef } from '../../components/Input';

import { Container, Content, Background, LogosContainer, LogoImg, LoginButton } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const emailRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);

  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(async () => {
    try {
      const data = {
        email: emailRef.current?.getValue() || '',
        password: passwordRef.current?.getValue() || '',
      };

      setIsLoading(true);
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail é obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn(data);

      history.push('/app');

      addToast({
        title: 'Sucesso',
        type: 'success',
        description: 'Login feito com sucesso',
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }
      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
      });
    } finally {
      setIsLoading(false);
    }
  }, [signIn, history, addToast]);

  return (
    <Container>
      <Background />
      <Content>
        <LogosContainer>
          <div>
            <LogoImg src={azureImg} alt="azure" />
            <LogoImg src={dockerImg} alt="docker" />
          </div>
          <div>
            <LogoImg src={opcuaImg} alt="opcua" />
            <LogoImg src={mqttImg} alt="mqtt" />
          </div>
        </LogosContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input isPassword={false} ref={emailRef} name="email" placeholder="email" Icon={FiUser} />
          <Input isPassword ref={passwordRef} name="password" type="password" placeholder="Senha" Icon={FiUnlock} />
        </Form>
        <LoginButton disabled={isLoading} type="submit" onClick={handleSubmit}>
          Entrar
        </LoginButton>
      </Content>
    </Container>
  );
};

export default SignIn;
