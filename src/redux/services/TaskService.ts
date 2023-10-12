import { ITask } from '@/types/ITask';
import { ToDoApi } from './api';

export const taskApi = ToDoApi.injectEndpoints({
  endpoints: (build) => ({
    fetchAllTasks: build.query<
      { tasks: ITask[]; totalTasks: number },
      { currentPage: number; filter: string }
    >({
      query: ({ currentPage, filter }) => ({
        url: '/tasks',
        params: {
          currentPage: currentPage,
          filter: filter,
        },
      }),
      providesTags: () => ['Task'],
    }),
    createTask: build.mutation<ITask, string>({
      query: (name) => ({
        url: '/tasks',
        method: 'POST',
        body: { name: name },
      }),
      invalidatesTags: ['Task'],
    }),
    deleteTask: build.mutation<ITask, number>({
      query: (id) => ({
        url: '/tasks',
        method: 'DELETE',
        body: { id: id },
      }),
      invalidatesTags: ['Task'],
    }),
    updateTask: build.mutation<ITask, { id: number; name: string }>({
      query: (task) => ({
        url: '/tasks',
        method: 'PUT',
        body: task,
      }),
      invalidatesTags: ['Task'],
    }),
  }),
  overrideExisting: false,
});
