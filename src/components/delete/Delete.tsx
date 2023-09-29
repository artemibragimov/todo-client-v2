import s from "./Delete.module.css";
import { BigDeleteIcon, CloseIcon } from "../../assets";
import { useEffect } from "react";

interface DeleteType {
  id: number;
  handleClick: (id: number) => Promise<void>;
  toggle: (boolean: boolean) => void;
  title: string;
}

const Delete = ({ id, handleClick, toggle, title }: DeleteType) => {
  const onClick = () => {
    handleClick(id);
    toggle(false);
  };

  useEffect(() => {
    const close = (e: any) => {
      if (e.keyCode === 27) {
        toggle(false);
      }
      if (e.keyCode === 13) {
        onClick();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <div className={s.delete_form}>
      <div className={s.title}>{title}</div>
      <div className={s.question}>Are you sure about deleting this task?</div>

      <div className={s.btn_container}>
        <button className={s.delete_button + " " + s.btn} onClick={onClick}>
          <BigDeleteIcon />
          <p>Delete</p>
        </button>

        <button
          className={s.close_button + " " + s.btn}
          onClick={() => toggle(false)}
        >
          <CloseIcon />
          <p>Close</p>
        </button>
      </div>
    </div>
  );
};

export default Delete;
