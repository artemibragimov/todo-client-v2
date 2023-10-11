'use client';
import React, { useEffect } from 'react';
import { SignInIcon } from '../../assets';
import { SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';
import { userApi } from '@/redux/services/UserService';
import { useRouter } from 'next/navigation';
import * as SignUpSC from './Signup.styled';
import { ISignUp } from '@/types/ISignup';
import { isAuth, setToken } from '@/helpers/token';
import { IValidationError } from '@/types/IValidationError';

export default function SignUp() {
  const [signUp, { data }] = userApi.useSignUpMutation();

  const router = useRouter();

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
      passwordConfirmation: '',
    },
  });

  const onSubmit: SubmitHandler<ISignUp> = async (data) => {
    await signUp({
      login: data.login,
      email: data.email,
      password: data.password,
      passwordConfirmation: data.passwordConfirmation,
    })
      .unwrap()
      .catch((error) => {
        if ('data' in error) {
          const path = ['login', 'email', 'password', 'passwordConfirmation'];
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
    <SignUpSC.SignupContainer>
      <SignUpSC.Tittle>Sign up</SignUpSC.Tittle>

      <SignUpSC.SignupForm onSubmit={handleSubmit(onSubmit)}>
        <SignUpSC.SignupInput
          $box_shadow={errors.login ? 'error' : ''}
          placeholder="Enter login"
          {...register('login', { required: true })}
        />

        {errors.login && (
          <SignUpSC.Error>{errors.login.message}</SignUpSC.Error>
        )}

        <SignUpSC.SignupInput
          $box_shadow={errors.email ? 'error' : ''}
          placeholder="Enter email"
          {...register('email', { required: true })}
        />

        {errors.email && (
          <SignUpSC.Error>{errors.email.message}</SignUpSC.Error>
        )}

        <SignUpSC.SignupInput
          $box_shadow={errors.password ? 'error' : ''}
          type="password"
          placeholder="Enter password"
          {...register('password', { required: true })}
        />

        {errors.password && (
          <SignUpSC.Error>{errors.password.message}</SignUpSC.Error>
        )}

        <SignUpSC.SignupInput
          $box_shadow={errors.passwordConfirmation ? 'error' : ''}
          type="password"
          placeholder="Confirm password"
          {...register('passwordConfirmation', { required: true })}
        />
        {errors.passwordConfirmation && (
          <SignUpSC.Error>{errors.passwordConfirmation.message}</SignUpSC.Error>
        )}

        <SignUpSC.LinkToLogin>
          <Link href="/login">Log in</Link>
        </SignUpSC.LinkToLogin>

        <SignUpSC.Button type="submit">
          <SignInIcon />
          Sign up
        </SignUpSC.Button>
      </SignUpSC.SignupForm>
    </SignUpSC.SignupContainer>
  );
}
