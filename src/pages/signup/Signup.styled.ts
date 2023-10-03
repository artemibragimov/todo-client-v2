import styled from "styled-components";

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
  border-color: #bdbdbd;
  border-radius: 10px;
  box-shadow: ${({ $box_shadow }) =>
    $box_shadow ? "0 0 0 0.2rem rgba(255, 0, 0, 0.589)" : ""};
  &:focus {
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;

export const Error = styled.div`
  font-size: 15px;
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
