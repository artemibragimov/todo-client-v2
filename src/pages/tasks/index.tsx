import { useEffect, useState } from 'react';
import Task from '../../components/task/Task';
import Modal from '../../components/modals/modal/Modal';
import {
  CalendarIcon,
  CalendarActiveIcon,
  DateIcon,
  AddTaskIcon,
  DoneIcon,
  DoneActiveIcon,
  FirstNewIcon,
  FirstOldIcon,
  ProfileIcon,
} from '../../assets';
import ToggleButton from '../../components/toggleButton/ToggleButton';
import TaskForm from '../../components/modals/children/taskForm/TaskForm';
import Dropdown from '../../components/dropdown/Dropdown';
import Button from '../../components/common/buttons/buttonWithIcon/Button';
import Delete from '../../components/modals/children/delete/Delete';
import Pagination from '../../components/pagination/Pagination';
import { taskApi } from '../../store/services/TaskService';
import { useRouter } from 'next/router';
import { userApi } from '../../store/services/UserService';
import Link from 'next/link';
import { getTokenFromLocalStorage } from '../../helper/token';
import {
  BottomBar,
  Login,
  NavBar,
  ProfileAvatar,
  ProfileLink,
  TaskBoard,
  TaskContainer,
  TaskHolder,
} from './Tasks.styled';
import { ITaskAction } from '../../types/ITask';

export default function Tasks() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('Today');
  const [isVisible, setIsVisible] = useState(false);
  const [action, setAction] = useState<ITaskAction>({
    action: 'Add task',
    name: '',
    id: 0,
  });

  const { data: userData } = userApi.useGetMeQuery('');
  const { data: tasksData } = taskApi.useFetchAllTasksQuery({
    currentPage: currentPage,
    filter: filter,
  });
  const [createTask] = taskApi.useCreateTaskMutation();
  const [deleteTask] = taskApi.useDeleteTaskMutation();
  const [updateTask] = taskApi.useUpdateTaskMutation();
  const router = useRouter();

  const isActive = (name: string) => filter === name;
  const isDate = () => filter === ('firstNew' || 'firstOld');

  const setDateFilter = () =>
    filter === 'firstOld' ? setFilter('firstNew') : setFilter('firstOld');

  const openModal = (action: string, name: string = '', id: number = 0) => {
    setAction({ action, name, id });
    setIsVisible(true);
  };

  const handleCreate = async (task: { id: number; name: string }) => {
    await createTask(task.name);
  };
  const handleUpdate = async (task: { id: number; name: string }) => {
    await updateTask(task);
  };
  const updateIsDone = async (id: number) => {
    await updateTask({ id: id, name: '' });
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

  useEffect(() => {
    if (!getTokenFromLocalStorage()) {
      router.push('/login');
    }
  }, [router]);

  return (
    <TaskContainer>
      <Login>{userData?.login}</Login>
      <ProfileLink>
        <Link href="/profile">
          {userData ? (
            <ProfileAvatar src={userData.imageUrl} alt="User avatar" />
          ) : (
            <ProfileIcon width={40} />
          )}
        </Link>
      </ProfileLink>

      <TaskHolder>
        <NavBar>
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
          <BottomBar>
            <Button
              name="Add task"
              Icon={AddTaskIcon}
              handleClick={openModal}
            />
          </BottomBar>
        </NavBar>
        <TaskBoard>
          <Pagination
            pageSize={7}
            totalTask={tasksData?.totalTasks}
            currentPage={currentPage}
            handleClick={setCurrentPage}
          />
          {tasksData &&
            tasksData.tasks.map((obj, index) => (
              <Task
                handleClick={openModal}
                changeIsDone={updateIsDone}
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
        </TaskBoard>
      </TaskHolder>

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
            toggle={setIsVisible}
            handleSubmitForm={
              action.action === 'Add task' ? handleCreate : handleUpdate
            }
            formTitle={action.action}
          />
        )}
      </Modal>
    </TaskContainer>
  );
}
