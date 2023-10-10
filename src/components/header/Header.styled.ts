import styled from 'styled-components';
export const HeaderLine = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 16px;
  margin: 15px 1%;
  background: #ffffff;
  border-radius: 10px;
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 30px;

    text-decoration: none;
    color: #9333ea;
  }
`;

export const Login = styled.div`
  position: absolute;
  top: 35px;
  margin: 0 auto;
  left: 20%;
  right: 20%;
  text-align: center;
  color: #9333ea;
  font-size: 24px;
`;

export const ProfileLink = styled.div`
  position: absolute;
  top: 28px;
  right: 40px;
`;

export const ProfileAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  box-shadow:
    0 0 0 3px rgba(197, 207, 197, 0),
    0 0 13px #33333390;
`;

export const Title = styled.div`
  position: absolute;
  top: 35px;
  margin: 0 auto;
  left: 20%;
  right: 20%;
  text-align: center;
  color: #9333ea;
  font-size: 24px;
`;
