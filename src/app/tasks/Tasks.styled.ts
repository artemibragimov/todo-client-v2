import styled, { keyframes } from 'styled-components';

export const TaskContainer = styled.div`
  height: 92%;
  margin: 10px 0;
  display: flex;
`;

export const NavBar = styled.div`
  width: 20%;
  margin-right: 2%;
`;

export const BottomBar = styled.div`
  width: 20%;
  position: absolute;
  bottom: 0;
`;

export const TaskBoard = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 10px;
  background: #f4f4f4;
  border-radius: 10px;
`;

export const UserInfoContainer = styled.div`
  position: absolute;
  top: 10px;
  height: 7%;
  right: 10px;

  width: 55%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Login = styled.div`
  color: #9333ea;
  font-size: 2.5vh;
`;

export const ProfileLink = styled.div`
  width: 10%;
  margin-right: 10px;

  & a {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const ProfileAvatar = styled.img`
  width: 50%;
  border-radius: 100px;
  box-shadow: 0 0 0 3px rgba(197, 207, 197, 0), 0 0 13px #33333390;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: max-content;
  height: max-content;

  padding: 5px;
  border-radius: 50%;
  border-style: none;

  background-color: transparent;

  cursor: pointer;

  &:hover {
    background-color: rgba(147, 51, 234, 0.2);
  }
`;

//Skeleton

const loading = keyframes`         
  0% {
    transform: skewX(-10deg) translateX(-100%);
  }
  100% {
    transform: skewX(-10deg) translateX(200%);
  }`;

export const SkeletonContainer = styled.div`
  display: flex;
  margin: 2.5% 1%;
  height: 80vh;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.9),
      transparent
    );
    width: 100%;
    height: 100%;
    z-index: 999;
    animation: ${loading} 1s infinite;
  }
`;

export const SkeletonNavBar = styled.div`
  width: 20%;
  margin-right: 2%;
`;
export const SkeletonButton = styled.div`
  width: 100%;
  height: 70px;
  margin: 10px 0;
  border-radius: 10px;
  background: rgba(238, 238, 238, 0.3);
`;

export const SkeletonBottomBar = styled.div`
  width: 20%;
  position: absolute;
  bottom: 7%;
`;

export const SkeletonTaskBoard = styled.div`
  width: 80%;
  padding: 100px 15px;
  background: rgba(238, 238, 238, 0.9);
  border-radius: 10px;
`;
export const SkeletonTask = styled.div`
  border-radius: 10px;
  height: 6vh;
  margin-top: 20px;
  background: rgba(204, 204, 204, 0.5);
`;
