'use client';
import { useRouter } from 'next/navigation';
import ToggleButton from '../../components/toggleButton/ToggleButton';
import { LogoutIcon, ProfileBtnIcon, SecurityIcon } from '../../assets';
import Button from '../../components/common/buttons/buttonWithIcon/Button';
import { ChangeEventHandler, useState } from 'react';
import UserInfo from '../../components/userInfo/UserInfo';
import { userApi } from '@/redux/services/UserService';
import Security from '../../components/security/Security';
import * as ProfileSC from './Profile.styled';
import { removeToken } from '@/helpers/token';

export default function Profile() {
  const { data: userData } = userApi.useGetMeQuery();
  const [logout] = userApi.useLogoutMutation();
  const [uppdateMe, { isSuccess }] = userApi.useUppdateMeMutation();
  const [uploadPhoto] = userApi.useUploadPhotoMutation();
  const [editPassword] = userApi.useEditPasswordMutation();

  const router = useRouter();

  const [active, setActive] = useState<string>('Profile');

  const isActive = (name: string) => active === name;

  const onClickLogout = () => {
    logout();
    removeToken();
    router.push('/login');
  };

  const handleChangeFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const formData = new FormData();
      formData.append('image', files[0]);

      uploadPhoto(formData);
    }
  };

  return (
    <ProfileSC.ProfileInfoContainer>
      <ProfileSC.NavBar>
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

        <ProfileSC.BottomBar>
          <Button
            name="Log Out"
            Icon={LogoutIcon}
            handleClick={onClickLogout}
          />
        </ProfileSC.BottomBar>
      </ProfileSC.NavBar>
      <ProfileSC.InfoBoard>
        {active === 'Profile' && (
          <UserInfo
            login={userData?.login}
            email={userData?.email}
            imageUrl={userData?.imageUrl}
            isSuccess={isSuccess}
            handleChangeFile={handleChangeFile}
            handleChange={uppdateMe}
          />
        )}
        {active === 'Security' && (
          <Security handleEditPassword={editPassword} />
        )}
      </ProfileSC.InfoBoard>
    </ProfileSC.ProfileInfoContainer>
  );
}
