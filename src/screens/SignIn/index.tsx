import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Content, SubTitle, Title } from './styles';
import HeaderSignIn from '../../components/HeaderSigIn';
import {  useAuth } from '../../hooks/AuthContext';


const SignIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin, authState } = useAuth();

  

  const handleSignIn = useCallback(async () => {
    try {
     const result = await onLogin(username, password);
     if (result && result.error) {
      alert(result.msg)
     }
    } catch (error) {
      console.log(error);
    }
  }, [username, password, onLogin]);

  const isFilled = useMemo(() => {
    return !!username && !!password;
  }, [username, password]);

  return (
    <>
      <HeaderSignIn />

      <Container>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <Content>
            <Title>Login</Title>
            <SubTitle>Insira seu login e senha para acessar a plataforma</SubTitle>
            <SubTitle>Token: {authState.token}</SubTitle>

            <Input
              label="Login"
              placeholder="Insira o login cadastrado"
              type="secondary"
              autoCorrect={false}
              autoCapitalize="none"
              value={username}
              onChangeText={setUsername}
            />

            <Input
              label="Senha"
              placeholder="Insira a senha"
              type="secondary"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              keyboardType="numeric"
            />

            <Button title="ENTRAR" type={isFilled ? 'primary' : 'secondary'} onPress={handleSignIn} />
          </Content>
        </KeyboardAvoidingView>
      </Container>
    </>
  );
};

export default React.memo(SignIn);
function checkToken() {
  throw new Error('Function not implemented.');
}

