import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;

export const TaskFormTitle = styled.div`
  width: 100%;
  height: 8vh;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  background: linear-gradient(259.86deg, #f5edfd 0%, #feeff5 85.32%);

  font-weight: 700;
  font-size: 3vh;
  color: #9333ea;
`;

export const TaskForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TaskFormInput = styled.input`
  width: 74%;

  margin: 5% auto 1% auto;
  padding: 2%;
  border: 1px solid #bdbdbd;
  border-radius: 10px;

  font-size: 24px;

  color: #212529;

  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;

export const Error = styled.div`
  font-size: 1.5vh;
  color: red;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  width: 74%;

  display: flex;
  justify-content: space-between;

  margin-top: 4%;
`;

interface Button {
  $color: string;
  $bg: string;
  $bgHover: string;
}

export const Button = styled.button<Button>`
  width: 45%;
  height: 10%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border-style: none;
  padding: 5%;

  font-size: 3vh;
  color: ${({ $color }) => $color};
  text-align: left;

  cursor: pointer;

  background-color: ${({ $bg }) => $bg};

  cursor: pointer;
  transition: color 100ms;

  &:hover {
    background-color: ${({ $bgHover }) => $bgHover};
  }
  & svg {
    margin-right: 5%;
  }
`;
