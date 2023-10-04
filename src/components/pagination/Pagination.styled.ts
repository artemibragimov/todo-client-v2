import styled from 'styled-components';

export const PaginationContainer = styled.div`
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 22px;
  color: #6b7280;

  margin-bottom: 0;
`;

interface PaginationButton {
  $isCurrent: boolean;
}

export const PaginationButton = styled.div<PaginationButton>`
  margin: 0 3px;
  padding: 5px;
  border-bottom: 2px solid rgba(125, 64, 255, 0.5);
  background: ${({ $isCurrent }) => ($isCurrent ? '#9333ea0f' : '')};

  cursor: pointer;

  & :hover {
    background: #9333ea0f;
    border-radius: 3px;
  }
`;
