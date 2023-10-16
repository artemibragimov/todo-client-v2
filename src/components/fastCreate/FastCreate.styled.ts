import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormInput = styled.input`
  width: 74%;

  padding: 0.5%;
  border: 1px solid #bdbdbd;
  border-radius: 10px;

  font-size: 2.2vh;

  color: #212529;

  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: max-content;
  height: max-content;

  margin-right: 10px;
  padding: 5px;
  border-radius: 50%;
  border-style: none;

  background-color: transparent;

  cursor: pointer;

  &:hover {
    background-color: rgba(147, 51, 234, 0.2);
  }
`;
