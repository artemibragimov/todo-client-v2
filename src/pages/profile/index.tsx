import { useRouter } from 'next/router';
import ToggleButton from '../../components/toggleButton/ToggleButton';
import { LogoutIcon, ProfileBtnIcon, SecurityIcon } from '../../assets';
import Button from '../../components/common/buttons/buttonWithIcon/Button';
import { ChangeEventHandler, useEffect, useState } from 'react';
import UserInfo from '../../components/userInfo/UserInfo';
import { userApi } from '../../store/services/UserService';
import Security from '../../components/security/Security';
import {
  BottomBar,
  InfoBoard,
  NavBar,
  ProfileInfoContainer,
  Title,
} from './Profile.styled';
import { getToken } from '../../helpers/token';

const Profile = () => {
  const { data: userData } = userApi.useGetMeQuery();
  const [logout] = userApi.useLogoutMutation();
  const [uploadAvatar] = userApi.useUploadAvatarMutation();
  const [editLogin] = userApi.useEditLoginMutation();
  const [editEmail] = userApi.useEditEmailMutation();
  const [editPassword] = userApi.useEditPasswordMutation();

  const router = useRouter();

  const [active, setActive] = useState<string>('Profile');

  const isActive = (name: string) => active === name;

  const onClickLogout = () => {
    logout();
    window.localStorage.removeItem('token');
    router.push('/login');
  };

  const handleChangeFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const formData = new FormData();
      formData.append('image', files[0]);

      uploadAvatar(formData);
    }
  };

  return (
    <div>
      <Title>Settings</Title>
      <ProfileInfoContainer>
        <NavBar>
          <ToggleButton
            name="Profile"
            Icon={ProfileBtnIcon}
            ActiveIcon={ProfileBtnIcon}
            handleClick={setActive}
            isActive={isActive}
          />
          <ToggleButton
            name="Security"
            Icon={SecurityIcon}
            ActiveIcon={SecurityIcon}
            handleClick={setActive}
            isActive={isActive}
          />

          <BottomBar>
            <Button
              name="Log Out"
              Icon={LogoutIcon}
              handleClick={onClickLogout}
            />
          </BottomBar>
        </NavBar>
        <InfoBoard>
          {active === 'Profile' && (
            <UserInfo
              login={userData?.login}
              email={userData?.email}
              imageUrl={userData?.imageUrl}
              handleChangeFile={handleChangeFile}
              handleEditLogin={editLogin}
              handleEditEmail={editEmail}
            />
          )}
          {active === 'Security' && (
            <Security handleEditPassword={editPassword} />
          )}
        </InfoBoard>
      </ProfileInfoContainer>
    </div>
  );
};

export default Profile;
