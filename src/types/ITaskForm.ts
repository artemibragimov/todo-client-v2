import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  MutationDefinition,
} from '@reduxjs/toolkit/query';
import { ITask } from './ITask';

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

export interface IFastCreate {
  toggle: () => void;
  handleCreate: MutationTrigger<
    MutationDefinition<
      string,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      'Task' | 'User',
      ITask,
      'ToDoApi'
    >
  >;
}
