import styled, { keyframes } from 'styled-components';

export const SignupContainer = styled.div`
  background-color: #ffffff;
  width: 65%;
  margin: 3% auto;
  padding: 2%;
  text-align: center;
  border-radius: 10px;
`;

export const Tittle = styled.div`
  color: #9333ea;
  font-weight: 700;
  font-size: 30px;
`;

export const SignupForm = styled.form`
  margin-top: 5%;
  font-weight: 400;
  font-size: 24px;
`;
interface SignupInput {
  $box_shadow: string;
}
export const SignupInput = styled.input<SignupInput>`
  display: block;
  width: 60%;
  margin: 1% auto 0 auto;
  padding: 1%;
  font-size: 18px;
  font-weight: 400;
  color: #212529;
  background-color: #fff;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  box-shadow: ${({ $box_shadow }) =>
    $box_shadow ? '0 0 0 0.2rem rgba(255, 0, 0, 0.589)' : ''};
  &:focus {
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;

export const Error = styled.div`
  margin-top: 5px;
  font-size: 12px;
  color: red;
  text-align: center;
`;

export const LinkToLogin = styled.div`
  margin-top: 3%;
  display: flex;
  align-items: center;
  padding-left: 70%;

  & a {
    padding: 10px;
    font-size: 18px;
    color: #9333ea;
    margin-bottom: 2px;
    border-radius: 10px;
  }
  & a:hover {
    background-color: #9333ea0f;
  }
`;

export const Button = styled.button`
  border-radius: 10px;
  border-style: none;
  font-size: 24px;
  transition: color 100ms;
  padding: 20px 10px;
  margin: 3% auto;
  width: 45%;
  height: 10%;
  text-align: left;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;

  background-color: #9333ea0f;
  color: #9333ea;
  &:hover {
    background: rgba(147, 51, 234, 0.2);
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
  background-color: #ffffff;
  width: 65%;
  margin: 3% auto;
  padding: 2%;
  border-radius: 10px;
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
    width: 80vw;
    height: 100%;
    z-index: 999;
    animation: ${loading} 1s infinite;
  }
`;

export const SkeletonTittle = styled.div`
  color: #9333ea;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  margin-bottom: 5%;
`;

export const SkeletonFormInput = styled.div`
  margin: 10px auto 0 auto;
  width: 60%;
  border-radius: 10px;
  height: 5vh;
  background: rgba(204, 204, 204, 0.5);
`;
export const SkeletonButton = styled.div`
  border-radius: 10px;
  margin: 10% auto;
  width: 45%;
  height: 7vh;
  background: rgba(238, 238, 238, 0.5);
`;
