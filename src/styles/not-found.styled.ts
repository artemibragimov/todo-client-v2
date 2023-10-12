import styled from 'styled-components';

export const Container = styled.div`
  margin: 5% 10% 10% 10%;
  padding: 40px 0;
  text-align: center;

  border-image: linear-gradient(#eeaeca, #b394e9) 30;
  border-width: 4px;
  border-style: solid;
`;

export const Title = styled.h1`
  font-size: 150px;
  color: #9333ea;
`;

export const MessageTitle = styled.h1`
  margin-top: 40px;
  font-size: 50px;
`;
export const Message = styled.p`
  margin-top: 20px;
  font-size: 20px;
`;

export const LinkBox = styled.div`
  margin-top: 80px;
`;
export const LinkToTask = styled.a`
  box-sizing: border-box;
  text-align: center;

  width: 150px;
  height: 70px;

  border-radius: 10px;
  padding: 10px 20px;

  font-size: 24px;
  color: #9333ea;
  text-decoration: none;
  background: #9333ea0f;
  transition: color 100ms;

  cursor: pointer;

  &:hover {
    background: rgba(147, 51, 234, 0.2);
  }
`;
