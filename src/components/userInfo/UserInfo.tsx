import { useEffect, useRef, useState } from 'react';
import { ChangeIcon, CloseIcon, ProfileIcon, SaveIcon } from '../../assets';
import {
  Button,
  ChangeField,
  Error,
  Info,
  Text,
  UpdateMeForm,
  UpdateMeInput,
  UserContainer,
  UserEmail,
  UserLogin,
  UserPhoto,
  UserPhotoContainer,
} from './UserInfo.styled';
import { IValidationError } from '../../types/IValidationError';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IUpdateMe } from '../../types/IUpdateMe';
import { IUserInfo } from '../../types/IUserInfo';
import useOnClickOutside from '../../utils/hooks/useOnClickOutside';

const UserInfo = ({
  login,
  email,
  imageUrl,
  isSuccess,
  handleChangeFile,
  handleChange,
}: IUserInfo) => {
  const [changeType, setChangeType] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
    setValue,
  } = useForm<IUpdateMe>({
    defaultValues: {
      login: '',
      email: '',
    },
  });

  const onSubmit: SubmitHandler<IUpdateMe> = async (data) => {
    await handleChange({
      login: data.login,
      email: data.email,
    })
      .unwrap()
      .catch((error) => {
        if ('data' in error) {
          const path = ['login', 'email'];
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

  const close = () => {
    setChangeType('');
    reset({
      login: login,
      email: email,
    });
  };

  useOnClickOutside(divRef, () => close());

  useEffect(() => {
    if (isSuccess) {
      setChangeType('');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (login && email) {
      setValue('login', login);
      setValue('email', email);
    }
  }, [login, email]);

  return (
    <UserContainer>
      <input ref={ref} type="file" onChange={handleChangeFile} hidden />

      <UserPhotoContainer>
        {imageUrl ? (
          <UserPhoto src={imageUrl} alt="avatar" />
        ) : (
          <ProfileIcon width={40} />
        )}

        <Button
          onClick={() => {
            ref.current?.click();
            setChangeType('photo');
          }}
        >
          <ChangeIcon />
        </Button>
      </UserPhotoContainer>

      <UpdateMeForm onSubmit={handleSubmit(onSubmit)}>
        <UserLogin>
          {changeType == 'login' ? (
            <>
              <ChangeField ref={divRef}>
                <UpdateMeInput
                  autoFocus
                  $box_shadow={errors.login ? 'error' : ''}
                  {...register('login', { required: true })}
                />

                <Button type="submit">
                  <SaveIcon width={25} />
                </Button>

                <Button onClick={close}>
                  <CloseIcon width={25} />
                </Button>
              </ChangeField>

              {errors.login && <Error>{errors.login.message}</Error>}
            </>
          ) : (
            <Info>
              <Text>{login}</Text>
              <Button onClick={() => setChangeType('login')}>
                <ChangeIcon />
              </Button>
            </Info>
          )}
        </UserLogin>

        <UserEmail>
          {changeType == 'email' ? (
            <>
              <ChangeField ref={divRef}>
                <UpdateMeInput
                  autoFocus
                  $box_shadow={errors.email ? 'error' : ''}
                  {...register('email', { required: true })}
                />

                <Button type="submit">
                  <SaveIcon />
                </Button>

                <Button onClick={close}>
                  <CloseIcon />
                </Button>
              </ChangeField>

              {errors.email && <Error>{errors.email.message}</Error>}
            </>
          ) : (
            <Info>
              <Text>{email}</Text>
              <Button onClick={() => setChangeType('email')}>
                <ChangeIcon />
              </Button>
            </Info>
          )}
        </UserEmail>
      </UpdateMeForm>
    </UserContainer>
  );
};

export default UserInfo;
