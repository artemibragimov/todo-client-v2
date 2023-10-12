import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  MutationDefinition,
} from '@reduxjs/toolkit/query';
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';

export interface ISecurity {
  isUpdatedPassword: boolean;
  handleEditPassword: MutationTrigger<
    MutationDefinition<
      { password: string; passwordConfirmation: string },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      'Task' | 'User',
      void,
      'ToDoApi'
    >
  >;
}

export interface SecurityInputs {
  password: string;
  passwordConfirmation: string;
}
