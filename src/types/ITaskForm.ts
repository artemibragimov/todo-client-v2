export interface ITaskForm {
  id: number;
  name: string;
  isDone: boolean;
  handleSubmitForm: (task: {
    id: number;
    name: string;
    isDone: boolean;
  }) => void;
  toggle: (boolean: boolean) => void;
  formTitle: string;
}

export interface ITaskFormInputs {
  name: string;
}
