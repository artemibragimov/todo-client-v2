import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getTokenFromLocalStorage } from '../../helpers/token';
import { baseUrl } from '../../helpers/constants/api';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['User'],
  endpoints: (build) => ({
    signUp: build.mutation<
      { token: string },
      { login: string; email: string; password: string }
    >({
      query: (userData) => ({
        url: '/auth/signup',
        method: 'POST',
        body: userData,
      }),
    }),

    signIn: build.mutation<
      { token: string },
      { login: string; password: string }
    >({
      query: (userData) => ({
        url: '/auth/login',
        method: 'POST',
        body: userData,
      }),
    }),

    uploadAvatar: build.mutation<{ url: string }, FormData>({
      query: (body) => ({
        url: '/auth/uploads',
        method: 'POST',
        body,
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      }),
      invalidatesTags: ['User'],
    }),

    getMe: build.query<
      { login: string; email: string; imageUrl: string; createdAt: string },
      ''
    >({
      query: () => ({
        url: '/auth/me',
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      }),
      providesTags: () => ['User'],
    }),

    editLogin: build.mutation<{ message: string }, { login: string }>({
      query: (body) => ({
        url: '/auth/me/editLogin',
        method: 'POST',
        body,
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      }),
      invalidatesTags: ['User'],
    }),

    editEmail: build.mutation<{ message: string }, { email: string }>({
      query: (body) => ({
        url: '/auth/me/editEmail',
        method: 'POST',
        body,
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      }),
      invalidatesTags: ['User'],
    }),

    editPassword: build.mutation<{ message: string }, { password: string }>({
      query: (body) => ({
        url: '/auth/me/editPassword',
        method: 'POST',
        body,
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      }),
      invalidatesTags: ['User'],
    }),
  }),
});
