import styled from 'styled-components';

interface Button {
  $isActivated: boolean;
}

export const Button = styled.button<Button>`
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
  background-color: ${({ $isActivated }) =>
    $isActivated ? 'rgba(147, 51, 234, 0.06)' : 'transparent'};

  font-weight: 400;
  font-size: 24px;
  color: ${({ $isActivated }) => ($isActivated ? '#9333ea' : '#6b7280')};

  cursor: pointer;

  &:hover {
    background: rgba(147, 51, 234, 0.06);
  }
  & svg {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }
`;
