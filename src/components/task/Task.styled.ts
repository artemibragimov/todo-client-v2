import styled from 'styled-components';

export const TaskContainer = styled.div`
  width: 100%;
  height: 6vh;

  display: flex;
  align-items: center;

  margin: 1% 0 0 0;
  padding: 1%;

  background: #9333ea0f;
  border-radius: 10px;
`;

export const IsDoneButton = styled.button`
  background-color: transparent;
  border-style: none;
  cursor: pointer;
`;

export const TaskName = styled.div`
  width: 75%;
  font-size: 2vh;
  margin: 0 auto 0 35px;
`;

export const TaskDate = styled.div`
  font-size: 1.7vh;
  color: #6b7280;
  margin-right: 10px;
  & svg {
    margin-left: 15px;
  }
`;

export const TaskSettings = styled.button`
  background-color: transparent;
  width: 3%;
  height: 100%;
  border-style: none;
  cursor: pointer;
  & svg {
    margin: auto;
  }
`;

export const SettingButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 3%;

  padding: 0 5px;

  border: 2px solid #7d40ff;
  border-radius: 12px;
`;

export const SettingButton = styled.button`
  display: flex;
  align-items: center;

  margin: 2px;
  border-style: none;
  background: transparent;
  cursor: pointer;
`;
