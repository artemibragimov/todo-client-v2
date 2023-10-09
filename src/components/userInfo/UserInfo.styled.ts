import styled from 'styled-components';

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
  margin-left: 5px;
  border-style: none;
  cursor: pointer;
  background: none;
  border-radius: 5px;
  &:hover {
    background: #f4eafc;
  }
  & svg {
    width: 28px;
  }
`;

export const UpdateMeForm = styled.form``;

export const UserLogin = styled.div`
  margin-top: 30px;
  font-size: 26px;
  color: #404040;
`;

export const UserEmail = styled.div`
  font-weight: 400;
  font-size: 20px;
  color: #6b7280;
`;

export const ChangeField = styled.div`
  display: flex;
  justify-content: center;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p``;

interface UpdateMeInput {
  $box_shadow: string;
}

export const UpdateMeInput = styled.input<UpdateMeInput>`
  text-align: center;
  background-color: #fff;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  box-shadow: ${({ $box_shadow }) =>
    $box_shadow ? '0 0 0 0.2rem rgba(255, 0, 0, 0.589)' : ''};
  &:focus {
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;

export const Error = styled.div`
  margin-top: 10px;
  font-size: 15px;
  color: red;
  text-align: center;
`;
