import s from "./UserInfo.module.css";
import { ChangeEventHandler, useRef } from "react";
import ChangeButton from "../changeButton/ChangeButton";

interface UserInfo {
  login?: string;
  email?: string;
  imageUrl?: string;
  handleChangeFile: ChangeEventHandler<HTMLInputElement>;
}

const UserInfo = ({ login, email, imageUrl, handleChangeFile }: UserInfo) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className={s.userInfo}>
      <input ref={ref} type="file" onChange={handleChangeFile} hidden />

      <div className={s.photo}>
        <img className={s.userPhoto} src={imageUrl} alt="avatar" />
        <ChangeButton handleClick={() => ref.current?.click()} />
      </div>

      <div className={s.userLogin}>
        {login}
        {/*         <ChangeButton handleClick={} /> */}
      </div>
      <div className={s.userEmail}>
        {email}
        {/*         <ChangeButton handleClick={} /> */}
      </div>
    </div>
  );
};

export default UserInfo;
