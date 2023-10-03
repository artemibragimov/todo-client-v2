import { FC, SVGProps } from "react";
import { ButtonWithIcon } from "./ButtonWithIcon.styled";

interface ButtonType {
  name: string;
  Icon: FC<SVGProps<SVGAElement>>;
  handleClick: (action: string) => void;
}

const Button = ({ name, Icon, handleClick }: ButtonType) => {
  return (
    <ButtonWithIcon onClick={() => handleClick(name)}>
      <Icon />
      {name}
    </ButtonWithIcon>
  );
};

export default Button;
