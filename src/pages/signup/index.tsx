import React, { useEffect, useState } from 'react';
import { SignInIcon } from '../../assets';
import { SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';
import { userApi } from '../../store/services/UserService';
import { useRouter } from 'next/router';
import {
  Button,
  Error,
  LinkToLogin,
  SignupContainer,
  SignupForm,
  SignupInput,
  Tittle,
} from './Signup.styled';
import { ISignUp } from '../../types/ISignup';
import {
  getTokenFromLocalStorage,
  setTokenInLocalStorage,
} from '../../helper/token';

const SignUp = () => {
  const [signUp, { data }] = userApi.useSignUpMutation();
  const router = useRouter();

  const [errorText, setErrorText] = useState('');

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ISignUp>({
    defaultValues: {
      login: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit: SubmitHandler<ISignUp> = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError('password', {
        type: 'error',
        message: 'password',
      });
      setError('confirmPassword', {
        type: 'error',
        message: 'confirmPassword',
      });
    } else {
      await signUp({
        login: data.login,
        email: data.email,
        password: data.password,
      })
        .unwrap()
        .catch((error) => {
          if ('data' in error) {
            setErrorText(error.data.errors[0].msg);
          }
        });
    }
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
    <SignupContainer>
      <Tittle>Sign up</Tittle>

      <SignupForm onSubmit={handleSubmit(onSubmit)}>
        <SignupInput
          $box_shadow={errors.login ? 'error' : ''}
          placeholder="Enter login"
          {...register('login', { required: true })}
        />

        <SignupInput
          $box_shadow={errors.email ? 'error' : ''}
          placeholder="Enter email"
          {...register('email', { required: true })}
        />

        <SignupInput
          $box_shadow={errors.password ? 'error' : ''}
          type="password"
          placeholder="Enter password"
          {...register('password', { required: true })}
        />

        <SignupInput
          $box_shadow={errors.confirmPassword ? 'error' : ''}
          type="password"
          placeholder="Confirm password"
          {...register('confirmPassword', { required: true })}
        />

        <Error>{errorText}</Error>

        <LinkToLogin>
          <Link href="/login">Log in</Link>
        </LinkToLogin>

        <Button type="submit">
          <SignInIcon />
          Sign up
        </Button>
      </SignupForm>
    </SignupContainer>
  );
};

export default SignUp;
