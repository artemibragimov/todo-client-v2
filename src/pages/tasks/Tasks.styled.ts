import styled from "styled-components";

export const TaskContainer = styled.div`
  margin: 2.5% 1%;
  height: 80vh;
`;

export const TaskHolder = styled.div`
  height: 100%;
  display: flex;
  position: relative;
`;

export const NavBar = styled.div`
  width: 20%;
  height: 100%;
  margin-right: 2%;
`;

export const BottomBar = styled.div`
  width: 20%;
  position: absolute;
  bottom: 0;
`;

export const TaskBoard = styled.div`
  width: 80%;
  padding: 0 3%;
  background: #f4f4f4;
  border-radius: 10px;
`;

export const Login = styled.div`
  position: absolute;
  top: 35px;
  margin: 0 auto;
  left: 20%;
  right: 20%;
  text-align: center;
  color: #9333ea;
  font-size: 24px;
`;

export const ProfileLink = styled.div`
  position: absolute;
  top: 28px;
  right: 40px;
`;

export const ProfileAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  box-shadow: 0 0 0 3px rgba(197, 207, 197, 0), 0 0 13px #33333390;
`;
