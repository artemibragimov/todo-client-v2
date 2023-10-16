import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 10px;

  font-size: 2.5vh;
  color: #6b7280;
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
