import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  MutationDefinition,
} from '@reduxjs/toolkit/query';
import { ChangeEventHandler } from 'react';

export interface IUserInfo {
  login?: string;
  email?: string;
  imageUrl?: string;
  isSuccess: boolean;
  handleChangeFile: ChangeEventHandler<HTMLInputElement>;
  handleChange: MutationTrigger<
    MutationDefinition<
      { login: string; email: string },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      'User',
      void,
      'ToDoApi'
    >
  >;
}
