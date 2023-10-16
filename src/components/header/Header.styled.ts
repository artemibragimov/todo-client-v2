import styled from 'styled-components';
export const HeaderLine = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 7%;

  border-radius: 10px;
  padding: 0.7%;

  background: #ffffff;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 700;
    font-size: 4vh;
    text-decoration: none;
    color: #9333ea;
  }
`;
