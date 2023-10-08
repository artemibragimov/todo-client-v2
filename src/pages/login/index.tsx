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
import { setToken } from '../../helpers/token';
import { isAuth, setIsAuth } from '../../helpers/isAuth';
import { IValidationError } from '../../types/IValidationError';

const Login = () => {
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

        if ('errors' in error) {
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
      setIsAuth(true);
      router.push('/tasks');
    }
  }, [data]);

  useEffect(() => {
    if (isAuth() === 'true') {
      router.push('/tasks');
    }
  }, []);
  return (
    <LoginContainer>
      <Tittle>Log in</Tittle>

      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <LoginInput
          $box_shadow={errors.login ? 'error' : ''}
          placeholder="Enter login"
          {...register('login', { required: true })}
        />

        {errors.login && <Error>{errors.login.message}</Error>}

        <LoginInput
          $box_shadow={errors.password ? 'error' : ''}
          type="password"
          placeholder="Enter password"
          {...register('password', { required: true })}
        />

        {errors.password && <Error>{errors.password.message}</Error>}
        {invalidError && <Error>{invalidError}</Error>}
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
