import styled from "styled-components";

export const ButtonWithIcon = styled.button`
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

  font-family: "Roboto", sans-serif;
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
