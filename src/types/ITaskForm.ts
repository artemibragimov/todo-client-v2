export interface ITaskForm {
  id: number;
  name: string;
  handleSubmitForm: (task: { id: number; name: string }) => void;
  toggle: (boolean: boolean) => void;
  formTitle: string;
}

export type ITaskFormInputs = {
  name: string;
};
