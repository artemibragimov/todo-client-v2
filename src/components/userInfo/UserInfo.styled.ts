import styled from "styled-components";

export const UserContainer = styled.div`
  margin-top: 50px;
  text-align: center;
`;
export const UserPhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const UserPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  box-shadow: 0 0 0 3px rgba(197, 207, 197, 0), 0 0 13px #333;
`;
export const Button = styled.button`
  margin-left: 10px;
  border-style: none;
`;

export const UserLogin = styled.div`
  margin-top: 30px;

  font-size: 26px;
  color: #404040;
`;

export const UserEmail = styled.div`
  margin-top: 10px;

  font-weight: 400;
  font-size: 20px;
  color: #6b7280;
`;

export const TextInput = styled.input`
  text-align: center;
  display: block;
  width: 50%;
  margin: 1% auto 0 auto;
  padding: 1%;
  font-size: 20px;
  font-weight: 400;
  color: #212529;
  background-color: #fff;
  border: 1px solid #bdbdbd;
  border-color: #bdbdbd;
  border-radius: 10px;
  &:focus {
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;
