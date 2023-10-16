import { CompleteIcon, SettingsIcon, NonCompleteIcon } from '../../assets';
import { useRef, useState } from 'react';
import { UpdateIcon, DeleteIcon } from '@/assets';
import useOnClickOutside from '@/utils/hooks/useOnClickOutside';
import {
  IsDoneButton,
  SettingButton,
  SettingButtons,
  TaskContainer,
  TaskDate,
  TaskName,
  TaskSettings,
} from './Task.styled';
import { ITaskItem } from '@/types/ITask';

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
      <IsDoneButton onClick={() => changeIsDone({ id, name, isDone: !isDone })}>
        {isDone ? <CompleteIcon /> : <NonCompleteIcon />}
      </IsDoneButton>

      <TaskName>{name}</TaskName>

      <TaskDate>{date}</TaskDate>
      {isHovering ? (
        <SettingButtons ref={ref}>
          <SettingButton
            onClick={() => handleClick('Update task', id, name, isDone)}
          >
            <UpdateIcon />
          </SettingButton>
          <SettingButton
            onClick={() => handleClick('Delete task', id, name, isDone)}
          >
            <DeleteIcon />
          </SettingButton>
        </SettingButtons>
      ) : (
        <TaskSettings onClick={() => setIsHovering(true)}>
          <SettingsIcon />
        </TaskSettings>
      )}
    </TaskContainer>
  );
};

export default Task;
