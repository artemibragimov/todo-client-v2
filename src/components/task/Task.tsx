import { CompleteIcon, SettingsIcon, NonCompleteIcon } from '../../assets';
import { useRef, useState } from 'react';
import { UpdateIcon, DeleteIcon } from '../../assets';
import useOnClickOutside from '../../utils/hooks/useOnClickOutside';
import {
  IsDoneButton,
  SettingButton,
  SettingButtons,
  TaskContainer,
  TaskDate,
  TaskItem,
  TaskName,
  TaskSettings,
} from './Task.styled';
import { ITaskItem } from '../../types/ITask';

const Task = ({
  id,
  isDone,
  name,
  date,
  changeIsDone,
  handleClick,
}: ITaskItem) => {
  const [isHovering, setIsHovering] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsHovering(false));

  return (
    <TaskContainer>
      <TaskItem>
        <IsDoneButton onClick={() => changeIsDone(id)}>
          {isDone ? <CompleteIcon /> : <NonCompleteIcon />}
        </IsDoneButton>

        <TaskName>{name}</TaskName>

        <TaskDate>{date}</TaskDate>

        <TaskSettings onClick={() => setIsHovering(true)}>
          <SettingsIcon />
        </TaskSettings>
      </TaskItem>
      {isHovering ? (
        <SettingButtons ref={ref}>
          <SettingButton onClick={() => handleClick('Update task', name, id)}>
            <UpdateIcon />
          </SettingButton>
          <SettingButton onClick={() => handleClick('Delete task', name, id)}>
            <DeleteIcon />
          </SettingButton>
        </SettingButtons>
      ) : null}
    </TaskContainer>
  );
};

export default Task;
