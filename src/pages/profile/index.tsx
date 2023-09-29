import { useRouter } from "next/router";
import s from "./Profile.module.css";
import ToggleButton from "../../components/toggleButton/ToggleButton";
import { LogoutIcon, ProfileBtnIcon, SecurityIcon } from "../../assets";
import Button from "../../components/button/Button";
import { useState } from "react";
import UserInfo from "../../components/userInfo/UserInfo";

const Profile = () => {
  const [active, setActive] = useState<string>("Profile");
  const isActive = (name: string) => active === name;
  const router = useRouter();
  const onClickLogout = () => {
    if (window.confirm("Do you really want to log out?")) {
      window.localStorage.removeItem("token");
      router.push("/login");
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
        <div className={s.taskBoard}>
          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default Profile;
