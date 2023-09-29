import s from "./UserInfo.module.css";

interface UserInfo {
  login: string;
  email: string;
}

const UserInfo = ({ login, email }) => {
  return (
    <div className={s.userInfo}>
      <div className={s.userLogin}>{login}</div>
      <div className={s.userEmail}>{email}</div>
    </div>
  );
};

export default UserInfo;
