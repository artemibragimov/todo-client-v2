import {
  Container,
  LinkBox,
  LinkToTask,
  Message,
  MessageTitle,
  Title,
} from './404.styled';

const Custom404 = () => {
  return (
    <Container>
      <Title>404</Title>

      <MessageTitle>Look like you are lost</MessageTitle>

      <Message>the page you are looking for not avaible!</Message>
      <LinkBox>
        <LinkToTask href="/tasks"> Go to Task</LinkToTask>
      </LinkBox>
    </Container>
  );
};
export default Custom404;
