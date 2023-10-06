import s from './UserInfo.module.css';
import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import { ChangeIcon, ProfileIcon } from '../../assets';
import {
  Button,
  TextInput,
  UserContainer,
  UserEmail,
  UserLogin,
  UserPhoto,
  UserPhotoContainer,
} from './UserInfo.styled';

interface UserInfo {
  login?: string;
  email?: string;
  imageUrl?: string;
  handleChangeFile: ChangeEventHandler<HTMLInputElement>;
  handleEditLogin: (body: { login: string }) => void;
  handleEditEmail: (body: { email: string }) => void;
}

const UserInfo = ({
  login,
  email,
  imageUrl,
  handleChangeFile,
  handleEditLogin,
  handleEditEmail,
}: UserInfo) => {
  const [changeType, setChangeType] = useState<string>('');
  const [localLogin, setLocalLogin] = useState<string>('');
  const [localEmail, setLocalEmail] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);

  const onBlur = () => {
    if (changeType == 'login' && localLogin != login) {
      handleEditLogin({ login: localLogin });
    }

    if (changeType == 'email' && localEmail != email) {
      handleEditEmail({ email: localEmail });
    }

    setChangeType('');
  };

  useEffect(() => {
    if (login && email) {
      setLocalLogin(login);
      setLocalEmail(email);
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

        <Button onClick={() => ref.current?.click()}>
          <ChangeIcon />
        </Button>
      </UserPhotoContainer>

      <UserLogin>
        {changeType == 'login' ? (
          <TextInput
            value={localLogin}
            onBlur={onBlur}
            onChange={(e) => setLocalLogin(e.target.value)}
            autoFocus
          />
        ) : (
          <div>
            {login}
            <Button onClick={() => setChangeType('login')}>
              <ChangeIcon />
            </Button>
          </div>
        )}
      </UserLogin>

      <UserEmail>
        {changeType == 'email' ? (
          <TextInput
            value={localEmail}
            onBlur={onBlur}
            onChange={(e) => setLocalEmail(e.target.value)}
            autoFocus
          />
        ) : (
          <div>
            {email}
            <Button onClick={() => setChangeType('email')}>
              <ChangeIcon />
            </Button>
          </div>
        )}
      </UserEmail>
    </UserContainer>
  );
};

export default UserInfo;
