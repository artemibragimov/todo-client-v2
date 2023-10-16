import { SubmitHandler, useForm } from 'react-hook-form';
import { ChangePasswordIcon } from '@/assets/index';
import {
  SecurityButton,
  SecurityContainer,
  SecurityInput,
  SecurityTitle,
  Error,
} from './Security.styled';
import { ISecurity, SecurityInputs } from '@/types/ISecurity';
import { IValidationError } from '@/types/IValidationError';
import { useEffect } from 'react';
import RTKErrors, { SetErrorCustomType } from '@/utils/RTKErrors';

const Security = ({ handleEditPassword, isUpdatedPassword }: ISecurity) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<SecurityInputs>({
    defaultValues: {
      password: '',
      passwordConfirmation: '',
    },
  });

  const onSubmit: SubmitHandler<SecurityInputs> = async (data) => {
    handleEditPassword({
      password: data.password,
      passwordConfirmation: data.passwordConfirmation,
    })
      .unwrap()
      .catch((error) => {
        RTKErrors({
          errors: error,
          setError: setError as SetErrorCustomType,
        });
      });
  };

  useEffect(() => {
    if (isUpdatedPassword) {
      reset({
        password: '',
        passwordConfirmation: '',
      });
    }
  }, [isUpdatedPassword]);
  return (
    <SecurityContainer>
      <SecurityTitle>Edit password</SecurityTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SecurityInput
          $box_shadow={errors.password ? 'true' : ''}
          type={'password'}
          placeholder="Enter new password"
          {...register('password', { required: true })}
        />

        {errors.password && <Error>{errors.password.message}</Error>}

        <SecurityInput
          type={'password'}
          $box_shadow={errors.passwordConfirmation ? 'true' : ''}
          placeholder="Confirm password"
          {...register('passwordConfirmation', { required: true })}
        />

        {errors.passwordConfirmation && (
          <Error>{errors.passwordConfirmation.message}</Error>
        )}

        <SecurityButton type="submit">
          <ChangePasswordIcon />
          Change password
        </SecurityButton>
      </form>
    </SecurityContainer>
  );
};

export default Security;
