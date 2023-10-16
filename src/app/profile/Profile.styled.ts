import styled, { keyframes } from 'styled-components';

export const Title = styled.div`
  position: absolute;
  top: 10px;
  left: 20%;
  right: 20%;

  height: 7%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #9333ea;
  font-size: 2.5vh;
`;

export const Container = styled.div`
  height: 93%;
  margin-top: 10px;
  display: flex;
  position: relative;
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

export const InfoBoard = styled.div`
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  background: #f4f4f4;
  border-radius: 10px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  text-align: left;

  width: 100%;
  height: 70px;
  margin: 10px 0;
  border-style: none;
  border-radius: 10px;
  padding: 20px 10px;

  transition: color 100ms;
  background-color: transparent;
  color: #9333ea;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 24px;

  cursor: pointer;

  &:hover {
    background: rgba(147, 51, 234, 0.06);
  }

  &:focus {
    background: rgba(147, 51, 234, 0.06);
  }

  & svg {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
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

export const SkeletonBoard = styled.div`
  width: 80%;
  padding: 50px 15px;
  background: rgba(238, 238, 238, 0.9);
  border-radius: 10px;
`;

export const SkeletonPhoto = styled.div`
  width: 100px;
  height: 100px;
  margin-left: 42%;
  background: rgba(183, 181, 181, 0.5);
  border-radius: 50%;
`;
export const SkeletonLogin = styled.div`
  margin: 35px auto 0 auto;
  width: 30%;
  height: 31px;
  border-radius: 10px;
  background: rgba(183, 181, 181, 0.25);
`;
export const SkeletonEmail = styled.div`
  height: 23px;
  width: 30%;
  background: rgba(183, 181, 181, 0.25);
  border-radius: 10px;
  margin: 3px auto 0 auto;
`;
