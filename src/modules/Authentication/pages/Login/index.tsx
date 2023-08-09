import React, { useRef, useCallback, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import { FiUser, FiUnlock } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../../../hooks/toast';
import getValidationErrors from '../../../../utils/getValidationsErrors';

import logoImg from '../../../../assets/logo.png';
import backgroundImg from '../../../../assets/background.png';

import Input, { InputRef } from '../../components/Input';

import { Container, Content, BackgroundImg, LogoImg, LoginButton } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const usernameRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);

  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(async () => {
    try {
      const data = {
        username: usernameRef.current?.getValue() || '',
        password: passwordRef.current?.getValue() || '',
      };

      setIsLoading(true);
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string().required('Nome é obrigatório'),
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
      <BackgroundImg src={backgroundImg} />
      <Content>
        <LogoImg src={logoImg} alt="logo empresa" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input ref={usernameRef} name="username" placeholder="Usuário" Icon={FiUser} />

          <Input ref={passwordRef} name="password" type="password" placeholder="Senha" Icon={FiUnlock} />
        </Form>
        <LoginButton disabled={isLoading} type="submit" onClick={handleSubmit}>
          Entrar
        </LoginButton>
      </Content>
    </Container>
  );
};

export default SignIn;
