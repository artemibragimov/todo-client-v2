import { useRouter } from "next/router";
import s from "./Profile.module.css";
import ToggleButton from "../../components/toggleButton/ToggleButton";
import { LogoutIcon, ProfileBtnIcon, SecurityIcon } from "../../assets";
import Button from "../../components/button/Button";
import { ChangeEventHandler, useState } from "react";
import UserInfo from "../../components/userInfo/UserInfo";
import { userApi } from "../../store/services/UserService";
import Security from "../../components/security/Security";

const Profile = () => {
  const [active, setActive] = useState<string>("Profile");
  const { data: userData } = userApi.useGetMeQuery("");
  const [uploadAvatar] = userApi.useUploadAvatarMutation();
  const [updateMe] = userApi.useUpdateMeMutation();
  const isActive = (name: string) => active === name;
  const router = useRouter();
  const onClickLogout = () => {
    if (window.confirm("Do you really want to log out?")) {
      window.localStorage.removeItem("token");
      router.push("/login");
    }
  };

  const handleChangeFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const formData = new FormData();
      formData.append("image", files[0]);

      uploadAvatar(formData);
    }
  };
  return (
    <div>
      <div className={s.settings}>Settings</div>
      <div className={s.taskContainer}>
        <div className={s.taskSettings}>
          <div>
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
          </div>
          <div className={s.bottomBar}>
            <Button
              name="Log Out"
              Icon={LogoutIcon}
              handleClick={onClickLogout}
            />
          </div>
        </div>
        <div className={s.board}>
          {active === "Profile" && (
            <UserInfo
              login={userData?.login}
              email={userData?.email}
              imageUrl={userData?.imageUrl}
              handleChangeFile={handleChangeFile}
              handleUpdate={updateMe}
            />
          )}
          {active === "Security" && <Security handleUpdate={updateMe} />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
