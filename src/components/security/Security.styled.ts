import styled from 'styled-components';

export const SecurityContainer = styled.div`
  text-align: center;
  margin: 40px;
`;

export const SecurityTitle = styled.div`
  font-size: 26px;
  margin-bottom: 5%;
`;

interface SecurityInput {
  $box_shadow: string;
}
export const SecurityInput = styled.input<SecurityInput>`
  display: block;
  width: 50%;
  margin: 1% auto 0 auto;
  padding: 1%;
  font-size: 18px;
  font-weight: 400;
  color: #212529;
  background-color: #fff;
  border: 1px solid #bdbdbd;
  border-color: #bdbdbd;
  border-radius: 10px;
  box-shadow: ${({ $box_shadow }) =>
    $box_shadow ? '0 0 0 0.2rem rgba(255, 0, 0, 0.589)' : ''};
  &:focus {
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;

export const SecurityButton = styled.button`
  border-radius: 10px;
  border-style: none;
  font-size: 24px;
  transition: color 100ms;
  padding: 20px 10px;
  margin: 5% auto;
  width: 35%;
  height: 10%;
  text-align: left;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;

  background-color: #9333ea0f;
  color: #9333ea;
  &:hover {
    background: rgba(147, 51, 234, 0.2);
  }
`;
