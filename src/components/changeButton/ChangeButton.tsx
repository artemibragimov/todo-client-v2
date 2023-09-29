import { ChangeIcon } from "../../assets";
import s from "./ChangeButton.module.css";

interface ChangeButton {
  handleClick: () => void;
}

const ChangeButton = ({ handleClick }: ChangeButton) => (
  <button onClick={handleClick} className={s.button}>
    <ChangeIcon />
  </button>
);

export default ChangeButton;
