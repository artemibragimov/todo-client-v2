import { CloseGreenIcon, SaveIconRed } from '../../../../assets';
import { useEffect } from 'react';
import {
  Button,
  ButtonContainer,
  ButtonTittle,
  Container,
  Question,
  Title,
} from './Logout.styled';

export default function Logout({
  toggle,
  onClickLogout,
  title,
}: {
  toggle: (isVisible: boolean) => void;
  title: string;
  onClickLogout: () => void;
}) {
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
    <Container>
      <Title>{title}</Title>
      <Question>Do you really want to log out?</Question>

      <ButtonContainer>
        <Button
          $bg="#f564970f"
          $bgHover="#f56497ad"
          $color="#f56497"
          onClick={() => onClickLogout()}
        >
          <SaveIconRed />
          <ButtonTittle> Yes</ButtonTittle>
        </Button>

        <Button
          $bg=" #6bf5640f"
          $bgHover="#6bf564ad"
          $color="#6bf564c3"
          onClick={() => toggle(false)}
        >
          <CloseGreenIcon />
          <ButtonTittle>Close</ButtonTittle>
        </Button>
      </ButtonContainer>
    </Container>
  );
}
