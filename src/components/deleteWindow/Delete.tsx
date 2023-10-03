import { BigDeleteIcon, CloseIcon } from "../../assets";
import { useEffect } from "react";
import {
  Button,
  ButtonContainer,
  ButtonTittle,
  DeleteForm,
  DeleteQuestion,
  Title,
} from "./Delete.styled";
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
    window.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        toggle(false);
      }
      if (e.key === "Enter") {
        onClick();
      }
    });
    return () =>
      window.removeEventListener("keyup", (e) => {
        if (e.key === "Escape") {
          toggle(false);
        }
        if (e.key === "Enter") {
          onClick();
        }
      });
  }, []);
  return (
    <DeleteForm>
      <Title>{title}</Title>
      <DeleteQuestion>Are you sure about deleting this task?</DeleteQuestion>

      <ButtonContainer>
        <Button
          $bg="#f564970f"
          $bgHover="#f56497ad"
          $color="#f56497"
          onClick={onClick}
        >
          <BigDeleteIcon />
          <ButtonTittle> Delete</ButtonTittle>
        </Button>

        <Button
          $bg=" #6b728044"
          $bgHover="#6b7280ad"
          $color="#6b7280"
          onClick={() => toggle(false)}
        >
          <CloseIcon />
          <ButtonTittle>Close</ButtonTittle>
        </Button>
      </ButtonContainer>
    </DeleteForm>
  );
};

export default Delete;
