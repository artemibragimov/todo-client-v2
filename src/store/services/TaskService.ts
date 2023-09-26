import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITask } from '../../types/ITask';

export const taskApi = createApi({
    reducerPath: 'taskApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    tagTypes: ['Task'],
    endpoints: (build) => ({
        fetchAllTasks: build.query<{ tasks: ITask[], totalTasks: number }, { currentPage: number, filter: string }>({
            query: ({ currentPage, filter }) => ({
                url: '/',
                params: {
                    currentPage: currentPage,
                    filter: filter
                }
            }),
            providesTags: () => ['Task']
        }),
        createTask: build.mutation<ITask, string>({
            query: (name) => ({
                url: '/',
                method: 'POST',
                body: { name: name }
            }),
            invalidatesTags: ['Task']
        }),
        deleteTask: build.mutation<ITask, number>({
            query: (id) => ({
                url: '/',
                method: 'DELETE',
                body: { id: id }
            }),
            invalidatesTags: ['Task']
        }),
        updateTask: build.mutation<ITask, { id: number, name: string }>({
            query: (task) => ({
                url: '/',
                method: 'PUT',
                body: task
            }),
            invalidatesTags: ['Task']
        }),
    })
});
