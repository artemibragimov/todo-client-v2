export interface ITask {
  id: number;
  isDone: boolean;
  name: string;
  date: string;
  time: string;
}

export interface ITaskItem {
  id: number;
  isDone: boolean;
  name: string;
  date: string;
  changeIsDone: (id: number) => void;
  handleClick: (action: string, newName: string, id: number) => void;
}
