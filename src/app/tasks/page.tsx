'use client';
import { useEffect, useState } from 'react';
import Task from '@/components/task/Task';
import Modal from '@/components/modals/modal/Modal';
import {
  CalendarIcon,
  CalendarActiveIcon,
  DateIcon,
  AddTaskIcon,
  DoneIcon,
  DoneActiveIcon,
  FirstNewIcon,
  FirstOldIcon,
} from '@/assets';
import TaskForm from '@/components/modals/children/taskForm/TaskForm';
import Dropdown from '@/components/dropdown/Dropdown';
import Button from '@/components/common/buttons/buttonWithIcon/Button';
import Delete from '@/components/modals/children/delete/Delete';
import Pagination from '@/components/pagination/Pagination';
import { taskApi } from '@/redux/services/TaskService';
import * as TasksSC from './Tasks.styled';
import { ITaskAction } from '@/types/ITask';
import ToggleButton from '@/components/toggleButton/ToggleButton';
import { pageSize } from '@/helpers/constants/pagination';
import FastCreate from '@/components/fastCreate/FastCreate';

export default function Tasks() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('Today');
  const [isVisible, setIsVisible] = useState(false);
  const [fastCreate, setFastCreate] = useState(false);
  const [action, setAction] = useState<ITaskAction>({
    action: 'Add task',
    id: 0,
    name: '',
    isDone: false,
  });

  const { data: tasksData } = taskApi.useFetchAllTasksQuery({
    currentPage: currentPage,
    filter: filter,
  });
  const [createTask] = taskApi.useCreateTaskMutation();
  const [updateTask] = taskApi.useUpdateTaskMutation();
  const [deleteTask] = taskApi.useDeleteTaskMutation();

  const isActive = (name: string) => filter === name;
  const isDate = () => filter === 'firstNew' || filter === 'firstOld';

  const setDateFilter = () =>
    filter === 'firstOld' ? setFilter('firstNew') : setFilter('firstOld');

  const openModal = (
    action: string,
    id: number = 0,
    name: string = '',
    isDone: boolean = false
  ) => {
    setAction({ action, id, name, isDone });
    setIsVisible(true);
  };

  const handleCreate = async (task: { id: number; name: string }) => {
    await createTask(task.name);
  };
  const handleUpdate = async (task: {
    id: number;
    name: string;
    isDone: boolean;
  }) => {
    await updateTask(task);
  };
  const handleDelete = async (id: number) => {
    await deleteTask(id);
  };

  useEffect(() => {
    if (tasksData?.tasks.length == 0 && tasksData?.totalTasks !== 0) {
      setCurrentPage(1);
    }
  }, [tasksData]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  return (
    <TasksSC.TaskContainer>
      <TasksSC.NavBar>
        <ToggleButton
          name="Today"
          Icon={CalendarIcon}
          ActiveIcon={CalendarActiveIcon}
          handleClick={setFilter}
          isActive={isActive}
        />
        <Dropdown
          options={['All', 'Done', 'Undone']}
          handleClick={setFilter}
          isActive={isActive}
          Icon={DoneIcon}
          ActiveIcon={DoneActiveIcon}
        />
        <ToggleButton
          name="Date"
          Icon={DateIcon}
          ActiveIcon={filter === 'firstNew' ? FirstNewIcon : FirstOldIcon}
          handleClick={setDateFilter}
          isActive={isDate}
        />
        <TasksSC.BottomBar>
          <Button name="Add task" Icon={AddTaskIcon} handleClick={openModal} />
        </TasksSC.BottomBar>
      </TasksSC.NavBar>

      <TasksSC.TaskBoard>
        {fastCreate ? (
          <FastCreate
            handleCreate={createTask}
            toggle={() => setFastCreate(!fastCreate)}
          />
        ) : (
          <TasksSC.Button onClick={() => setFastCreate(!fastCreate)}>
            <AddTaskIcon />
          </TasksSC.Button>
        )}
        <TasksSC.TaskHolder>
          {tasksData &&
            tasksData.tasks.map((obj, index) => (
              <Task
                handleClick={openModal}
                changeIsDone={handleUpdate}
                key={index}
                id={obj.id}
                isDone={obj.isDone}
                name={obj.name}
                date={
                  `${
                    new Date().toLocaleDateString() === obj.date &&
                    filter === 'Today'
                      ? ''
                      : obj.date + ' at '
                  }` + obj.time
                }
              />
            ))}
        </TasksSC.TaskHolder>
        <Pagination
          pageSize={pageSize}
          totalTask={tasksData?.totalTasks}
          currentPage={currentPage}
          handleClick={setCurrentPage}
        />
      </TasksSC.TaskBoard>

      <Modal isVisible={isVisible} toggle={setIsVisible}>
        {action.action === 'Delete task' ? (
          <Delete
            id={action.id}
            handleClick={handleDelete}
            toggle={setIsVisible}
            title={'Delete task'}
          />
        ) : (
          <TaskForm
            id={action.id}
            name={action.name}
            isDone={action.isDone}
            toggle={setIsVisible}
            handleSubmitForm={
              action.action === 'Add task' ? handleCreate : handleUpdate
            }
            formTitle={action.action}
          />
        )}
      </Modal>
    </TasksSC.TaskContainer>
  );
}
