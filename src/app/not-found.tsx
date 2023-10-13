'use client';
import {
  Container,
  LinkBox,
  LinkToTask,
  Message,
  MessageTitle,
  Title,
} from '@/styles/not-found.styled';

export default function Not_found() {
  return (
    <Container>
      <Title>404</Title>

      <MessageTitle>Look like you are lost</MessageTitle>

      <Message>the page you are looking for not avaible!</Message>
      <LinkBox>
        <LinkToTask href="/tasks"> Go to Tasks</LinkToTask>
      </LinkBox>
    </Container>
  );
}
