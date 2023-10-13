import styled from 'styled-components';

export const Container = styled.div`
  font-weight: 400;
  font-size: 24px;
`;

export const Title = styled.div`
  background: linear-gradient(259.86deg, #f5edfd 0%, #feeff5 85.32%);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 30px;

  color: #9333ea;

  display: block;
  width: 100%;

  font-weight: 700;
  font-size: 26px;
`;

export const Question = styled.div`
  font-weight: 400;
  font-size: 22px;
  color: #9333ea;
  margin: 40px auto;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto 0;
  width: 74%;
`;

interface ButtonProps {
  $bg: string;
  $bgHover: string;
  $color: string;
}
export const Button = styled.button<ButtonProps>`
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
  background-color: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};

  &:hover {
    background-color: ${({ $bgHover }) => $bgHover};
  }
`;

export const ButtonTittle = styled.p`
  margin-left: 10px;
`;
