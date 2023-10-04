import styled from 'styled-components';
interface DropdownButton {
  $isActivated: boolean;
}

export const DropdownButton = styled.button<DropdownButton>`
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
    $isActivated ? '#9333ea0f' : 'transparent'};

  font-weight: 400;
  font-size: 24px;
  color: ${({ $isActivated }) => ($isActivated ? '#9333ea' : '#6b7280')};

  cursor: pointer;

  &:hover {
    background: #9333ea0f;
  }

  & svg {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }
`;

export const List = styled.ul`
  font-weight: 400;
  font-size: 24px;
  background: #9333ea0f;

  border-style: none;
  border-radius: 10px;
`;

interface ListItem {
  $isActivated: boolean;
}

export const ListItem = styled.li<ListItem>`
  display: flex;
  align-items: center;
  text-align: left;

  width: 100%;
  height: 70px;
  border-style: none;
  border-radius: 10px;
  padding: 20px 10px;

  transition: color 100ms;
  background-color: ${({ $isActivated }) =>
    $isActivated ? '#9333ea0f' : 'transparent'};

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
