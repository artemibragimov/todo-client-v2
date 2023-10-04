import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITask } from '../../types/ITask';
import { getTokenFromLocalStorage } from '../../helper/token';

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['Task'],
  endpoints: (build) => ({
    fetchAllTasks: build.query<
      { tasks: ITask[]; totalTasks: number },
      { currentPage: number; filter: string }
    >({
      query: ({ currentPage, filter }) => ({
        url: '/',
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
        params: {
          currentPage: currentPage,
          filter: filter,
        },
      }),
      providesTags: () => ['Task'],
    }),
    createTask: build.mutation<ITask, string>({
      query: (name) => ({
        url: '/',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
        body: { name: name },
      }),
      invalidatesTags: ['Task'],
    }),
    deleteTask: build.mutation<ITask, number>({
      query: (id) => ({
        url: '/',
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
        body: { id: id },
      }),
      invalidatesTags: ['Task'],
    }),
    updateTask: build.mutation<ITask, { id: number; name: string }>({
      query: (task) => ({
        url: '/',
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
        body: task,
      }),
      invalidatesTags: ['Task'],
    }),
  }),
});
