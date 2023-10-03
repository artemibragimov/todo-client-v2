import styled from "styled-components";

export const TaskFormTitle = styled.div`
  background: linear-gradient(259.86deg, #f5edfd 0%, #feeff5 85.32%);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 4%;

  display: block;
  width: 100%;

  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 26px;
  color: #9333ea;
`;

export const TaskForm = styled.form`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 24px;
`;

export const TaskFormInput = styled.input`
  display: block;
  width: 74%;
  margin: 4% auto 0 auto;
  padding: 2%;
  font-family: inherit;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;

export const Error = styled.div`
  font-size: 15px;
  color: red;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2% auto 0;
  width: 74%;
`;

interface Button {
  $color: string;
  $bg: string;
  $bgHover: string;
}

export const Button = styled.button<Button>`
  border-radius: 10px;
  border-style: none;
  font-size: 24px;
  transition: color 100ms;
  padding: 20px 10px;
  width: 45%;
  height: 10%;
  text-align: left;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  color: ${({ $color }) => $color};
  background-color: ${({ $bg }) => $bg};
  & :hover {
    background-color: ${({ $bgHover }) => $bgHover};
  }
  & svg {
    margin-right: 5%;
  }
`;
