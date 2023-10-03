import { useEffect, useState } from "react";
import Task from "../../components/task/Task";
import Modal from "../../components/modal/Modal";
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
} from "../../assets";
import ToggleButton from "../../components/toggleButton/ToggleButton";
import TaskForm from "../../components/taskForm/TaskForm";
import Dropdown from "../../components/dropdown/Dropdown";
import Button from "../../components/common/buttons/buttonWithIcon/Button";
import Delete from "../../components/deleteWindow/Delete";
import Pagination from "../../components/pagination/Pagination";
import { taskApi } from "../../store/services/TaskService";
import { useRouter } from "next/router";
import { userApi } from "../../store/services/UserService";
import Link from "next/link";
import { getTokenFromLocalStorage } from "../../helper/token";
import {
  BottomBar,
  Login,
  NavBar,
  ProfileAvatar,
  ProfileLink,
  TaskBoard,
  TaskContainer,
  TaskHolder,
} from "./Tasks.styled";

export default function Tasks() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("Today");

  const { data: userData } = userApi.useGetMeQuery("");
  const { data: tasksData } = taskApi.useFetchAllTasksQuery({
    currentPage: currentPage,
    filter: filter,
  });
  const [createTask] = taskApi.useCreateTaskMutation();
  const [deleteTask] = taskApi.useDeleteTaskMutation();
  const [updateTask] = taskApi.useUpdateTaskMutation();
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);
  const [action, setAction] = useState<{
    action: string;
    name: string;
    id: number;
  }>({
    action: "Add task",
    name: "",
    id: 0,
  });

  const isActive = (name: string) => filter === name;
  const isDate = () => filter === "firstNew" || filter === "firstOld";

  const setDateFilter = () => {
    switch (filter) {
      case "firstOld":
        setFilter("firstNew");
        break;
      case "firstNew":
        setFilter("firstOld");
        break;
      default:
        setFilter("firstNew");
    }
  };

  const openModal = (action: string, name: string = "", id: number = 0) => {
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
    await updateTask({ id: id, name: "" });
  };
  const handleDelete = async (id: number) => {
    await deleteTask(id);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  useEffect(() => {
    if (!getTokenFromLocalStorage()) {
      router.push("/login");
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
            options={["All", "Done", "Undone"]}
            handleClick={setFilter}
            isActive={isActive}
            Icon={DoneIcon}
            ActiveIcon={DoneActiveIcon}
          />
          <ToggleButton
            name="Date"
            Icon={DateIcon}
            ActiveIcon={filter === "firstNew" ? FirstNewIcon : FirstOldIcon}
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
                    filter === "Today"
                      ? ""
                      : obj.date + " at "
                  }` + obj.time
                }
              />
            ))}
        </TaskBoard>
      </TaskHolder>
      <Modal isVisible={isVisible} toggle={setIsVisible}>
        {action.action === "Add task" && (
          <TaskForm
            id={action.id}
            name={action.name}
            handleSubmitForm={handleCreate}
            toggle={setIsVisible}
            formTitle={"Create task"}
          />
        )}
        {action.action === "Update task" && (
          <TaskForm
            id={action.id}
            name={action.name}
            handleSubmitForm={handleUpdate}
            toggle={setIsVisible}
            formTitle={"Update task"}
          />
        )}
        {action.action === "Delete task" && (
          <Delete
            id={action.id}
            handleClick={handleDelete}
            toggle={setIsVisible}
            title={"Delete task"}
          />
        )}
      </Modal>
    </TaskContainer>
  );
}
