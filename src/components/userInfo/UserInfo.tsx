import s from "./UserInfo.module.css";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import ChangeButton from "../changeButton/ChangeButton";

interface UserInfo {
  login?: string;
  email?: string;
  imageUrl?: string;
  handleChangeFile: ChangeEventHandler<HTMLInputElement>;
  handleUpdate: (body: { updateType: string; text: string }) => void;
}

const UserInfo = ({
  login,
  email,
  imageUrl,
  handleChangeFile,
  handleUpdate,
}: UserInfo) => {
  const [changeType, setChangeType] = useState<string>();
  const [localLogin, setLocalLogin] = useState<string>();
  const [localEmail, setLocalEmail] = useState<string>();
  const ref = useRef<HTMLInputElement>(null);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (changeType === "updateLogin") {
      setLocalLogin(e.target.value);
    } else {
      setLocalEmail(e.target.value);
    }
  };

  const onBlur = () => {
    if (changeType === "updateLogin" && localLogin && localLogin !== login) {
      handleUpdate({ updateType: changeType, text: localLogin });
    }

    if (changeType === "updateEmail" && localEmail && localEmail !== email) {
      handleUpdate({ updateType: changeType, text: localEmail });
    }
    setChangeType(undefined);
  };

  useEffect(() => {
    setLocalLogin(login);
    setLocalEmail(email);
  }, [login]);
  return (
    <div className={s.userInfo}>
      <input ref={ref} type="file" onChange={handleChangeFile} hidden />

      <div className={s.photo}>
        <img className={s.userPhoto} src={imageUrl} alt="avatar" />
        <ChangeButton handleClick={() => ref.current?.click()} />
      </div>

      <div className={s.userLogin}>
        {changeType === "updateLogin" ? (
          <input
            value={localLogin}
            onBlur={onBlur}
            onChange={onChange}
            autoFocus={true}
          />
        ) : (
          <div>
            {login}{" "}
            <ChangeButton handleClick={() => setChangeType("updateLogin")} />
          </div>
        )}
      </div>
      <div className={s.userEmail}>
        {changeType === "updateEmail" ? (
          <input
            value={localEmail}
            onBlur={onBlur}
            onChange={onChange}
            autoFocus
          />
        ) : (
          <div>
            {email}{" "}
            <ChangeButton handleClick={() => setChangeType("updateEmail")} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
