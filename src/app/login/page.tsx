'use client';
import React, { useEffect, useState } from 'react';
import { userApi } from '@/redux/services/UserService';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ILogin } from '@/types/ILogin';
import { IValidationError } from '@/types/IValidationError';
import { isAuth, setToken } from '@/helpers/token';
import * as LoginSC from './Login.styled';
import Link from 'next/link';
import { SignInIcon } from '@/assets/index';

export default function Login() {
  const [signIn, { data }] = userApi.useSignInMutation();
  const router = useRouter();
  const [invalidError, setInvalidError] = useState<string>();

  const {
    register,
    handleSubmit,
    setError,
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
        if ('message' in error.data) {
          setInvalidError(error.data.message);
        }
        if ('errors' in error.data) {
          const path = ['login', 'password'];
          path.map((path) => {
            const err = error.data.errors.find(
              (err: IValidationError) => err.path === path
            );
            if (err) {
              setError(err.path, {
                type: 'error',
                message: err.msg,
              });
            }
          });
        }
      });
  };

  useEffect(() => {
    if (data) {
      setToken(data.accessToken);
      router.push('/tasks');
    }
  }, [data]);

  useEffect(() => {
    if (isAuth()) {
      router.push('/tasks');
    }
  }, []);

  return (
    <LoginSC.LoginContainer>
      <LoginSC.Tittle>Log in</LoginSC.Tittle>

      <LoginSC.LoginForm onSubmit={handleSubmit(onSubmit)}>
        <LoginSC.LoginInput
          $box_shadow={errors.login ? 'error' : ''}
          placeholder="Enter login"
          {...register('login', { required: true })}
        />

        {errors.login && <LoginSC.Error>{errors.login.message}</LoginSC.Error>}

        <LoginSC.LoginInput
          $box_shadow={errors.password ? 'error' : ''}
          type="password"
          placeholder="Enter password"
          {...register('password', { required: true })}
        />

        {errors.password && (
          <LoginSC.Error>{errors.password.message}</LoginSC.Error>
        )}
        {invalidError && <LoginSC.Error>{invalidError}</LoginSC.Error>}
        <LoginSC.LinkToSignup>
          <Link href="/signup">Sign up</Link>
        </LoginSC.LinkToSignup>

        <LoginSC.Button type="submit">
          <SignInIcon />
          <p>Sign in</p>
        </LoginSC.Button>
      </LoginSC.LoginForm>
    </LoginSC.LoginContainer>
  );
}
