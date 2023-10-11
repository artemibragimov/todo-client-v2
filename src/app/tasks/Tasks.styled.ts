import styled, { keyframes } from 'styled-components';

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
  padding: 0 3% 3% 3%;
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
  box-shadow:
    0 0 0 3px rgba(197, 207, 197, 0),
    0 0 13px #33333390;
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
