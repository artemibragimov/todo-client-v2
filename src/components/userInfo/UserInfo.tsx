import s from "./UserInfo.module.css";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { ChangeIcon } from "../../assets";

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
  const [changeType, setChangeType] = useState<string>("");
  const [localLogin, setLocalLogin] = useState<string>("");
  const [localEmail, setLocalEmail] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  const onBlur = () => {
    if (changeType == "login" && localLogin != login) {
      handleEditLogin({ login: localLogin });
    }

    if (changeType == "email" && localEmail != email) {
      handleEditEmail({ email: localEmail });
    }

    setChangeType("");
  };

  useEffect(() => {
    if (login && email) {
      setLocalLogin(login);
      setLocalEmail(email);
    }
  }, [login, email]);

  return (
    <div className={s.userInfo}>
      <input ref={ref} type="file" onChange={handleChangeFile} hidden />

      <div className={s.photo}>
        <img className={s.userPhoto} src={imageUrl} alt="avatar" />
        <button className={s.button} onClick={() => ref.current?.click()}>
          <ChangeIcon />
        </button>
      </div>

      <div className={s.userLogin}>
        {changeType == "login" ? (
          <input
            value={localLogin}
            onBlur={onBlur}
            onChange={(e) => setLocalLogin(e.target.value)}
            autoFocus
            className={s.input}
          />
        ) : (
          <div>
            {login}
            <button className={s.button} onClick={() => setChangeType("login")}>
              <ChangeIcon />
            </button>
          </div>
        )}
      </div>

      <div className={s.userEmail}>
        {changeType == "email" ? (
          <input
            value={localEmail}
            onBlur={onBlur}
            onChange={(e) => setLocalEmail(e.target.value)}
            autoFocus
            className={s.input}
          />
        ) : (
          <div>
            {email}
            <button onClick={() => setChangeType("email")}>
              <ChangeIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
