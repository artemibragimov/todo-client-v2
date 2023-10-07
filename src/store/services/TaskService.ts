import { ITask } from '../../types/ITask';
import { splitApi } from '.';

const taskApiWithTag = splitApi.enhanceEndpoints({ addTagTypes: ['Task'] });

export const taskApi = taskApiWithTag.injectEndpoints({
  endpoints: (build) => ({
    fetchAllTasks: build.query<
      { tasks: ITask[]; totalTasks: number },
      { currentPage: number; filter: string }
    >({
      query: ({ currentPage, filter }) => ({
        url: '/',
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
        body: { name: name },
      }),
      invalidatesTags: ['Task'],
    }),
    deleteTask: build.mutation<ITask, number>({
      query: (id) => ({
        url: '/',
        method: 'DELETE',
        body: { id: id },
      }),
      invalidatesTags: ['Task'],
    }),
    updateTask: build.mutation<ITask, { id: number; name: string }>({
      query: (task) => ({
        url: '/',
        method: 'PUT',
        body: task,
      }),
      invalidatesTags: ['Task'],
    }),
  }),
});
