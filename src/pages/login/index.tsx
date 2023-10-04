import React, { useEffect, useState } from 'react';
import { SignInIcon } from '../../assets';
import { SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { userApi } from '../../store/services/UserService';
import { ILogin } from '../../types/ILogin';
import {
  Button,
  Error,
  LinkToSignup,
  LoginContainer,
  LoginForm,
  LoginInput,
  Tittle,
} from './Login.styled';
import {
  getTokenFromLocalStorage,
  setTokenInLocalStorage,
} from '../../helper/token';

const Login = () => {
  const [signIn, { data }] = userApi.useSignInMutation();
  const router = useRouter();
  const [errorText, setErrorText] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    await signIn({
      login: data.login,
      password: data.password,
    })
      .unwrap()
      .catch((error) => {
        if ('data' in error) {
          setErrorText(error.data.errors[0].msg);
        }
      });
  };

  useEffect(() => {
    if (data) {
      setTokenInLocalStorage(data.token);
    }
  }, [data]);

  useEffect(() => {
    if (getTokenFromLocalStorage() !== null) {
      router.push('/tasks');
    }
  }, [data, router]);

  return (
    <LoginContainer>
      <Tittle>Log in</Tittle>

      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <LoginInput
          $box_shadow={errors.login ? 'error' : ''}
          placeholder="Enter login"
          {...register('login', { required: true })}
        />

        <LoginInput
          $box_shadow={errors.password ? 'error' : ''}
          type="password"
          placeholder="Enter password"
          {...register('password', { required: true })}
        />

        <Error>{errorText}</Error>

        <LinkToSignup>
          <Link href="/signup">Sign up</Link>
        </LinkToSignup>

        <Button type="submit">
          <SignInIcon />
          <p>Sign in</p>
        </Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
