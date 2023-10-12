import styled from 'styled-components';

export const TaskContainer = styled.div`
  height: 6vh;
`;

export const TaskItem = styled.div`
  margin: 7px auto 0 auto;
  padding: 15px 1%;
  display: flex;
  align-items: center;

  font-weight: 400;
  background: #9333ea0f;
  border-radius: 10px;
`;

export const IsDoneButton = styled.button`
  border-style: none;
  cursor: pointer;
`;

export const TaskName = styled.div`
  font-size: 110%;
  margin: 0 auto 0 35px;
`;

export const TaskDate = styled.div`
  font-size: 16px;
  color: #6b7280;
  & svg {
    margin-left: 15px;
  }
`;

export const TaskSettings = styled.button`
  width: 20px;
  height: 15px;
  border-style: none;
  cursor: pointer;
  & svg {
    margin: auto;
  }
`;

export const SettingButtons = styled.div`
  display: flex;
  align-items: center;

  margin-left: auto;
  padding: 0 5px;
  width: max-content;
  background: #ffffff;
  border: 2px solid #7d40ff;
  border-radius: 12px;
`;

export const SettingButton = styled.button`
  display: flex;
  align-items: center;
  margin: 2px;
  border-style: none;
  background: #ffffff;
  cursor: pointer;
`;
