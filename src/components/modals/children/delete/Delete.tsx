import { BigDeleteIcon, CloseIcon } from '../../../../assets';
import { FormEvent, useEffect } from 'react';
import {
  Button,
  ButtonContainer,
  ButtonTittle,
  DeleteForm,
  DeleteQuestion,
  Title,
} from './Delete.styled';
import { IDelete } from '../../../../types/IDelete';

const Delete = ({ id, handleClick, toggle, title }: IDelete) => {
  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleClick(id);
    toggle(false);
  };

  useEffect(() => {
    const close = (e: any) => {
      if (e.keyCode === 27) {
        toggle(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  return (
    <DeleteForm onSubmit={onFormSubmit}>
      <Title>{title}</Title>
      <DeleteQuestion>Are you sure about deleting this task?</DeleteQuestion>

      <ButtonContainer>
        <Button
          $bg="#f564970f"
          $bgHover="#f56497ad"
          $color="#f56497"
          type="submit"
        >
          <BigDeleteIcon />
          <ButtonTittle> Delete</ButtonTittle>
        </Button>

        <Button
          $bg=" #6b728044"
          $bgHover="#6b7280ad"
          $color="#6b7280"
          onClick={() => toggle(false)}
          type="button"
        >
          <CloseIcon />
          <ButtonTittle>Close</ButtonTittle>
        </Button>
      </ButtonContainer>
    </DeleteForm>
  );
};

export default Delete;
