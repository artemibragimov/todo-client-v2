import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getTokenFromLocalStorage } from '../../helpers/token';
import { baseUrl } from '../../helpers/constants/api';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    credentials: 'include',
    prepareHeaders: (headers) => {
      headers.set('authorization', `bearer ${getTokenFromLocalStorage()}`);
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: (build) => ({
    signUp: build.mutation<
      { accessToken: string; refreshToken: string },
      { login: string; email: string; password: string }
    >({
      query: (userData) => ({
        url: '/auth/signup',
        method: 'POST',
        body: userData,
      }),
    }),

    signIn: build.mutation<
      { accessToken: string; refreshToken: string },
      { login: string; password: string }
    >({
      query: (userData) => ({
        url: '/auth/login',
        method: 'POST',
        body: userData,
      }),
    }),

    logout: build.mutation<{ message: string }, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),

    checkAuth: build.query<{ accessToken: string; refreshToken: string }, void>(
      {
        query: () => ({
          url: '/auth/refresh',
        }),
      }
    ),

    uploadAvatar: build.mutation<{ url: string }, FormData>({
      query: (body) => ({
        url: '/auth/uploads',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    getMe: build.query<
      { login: string; email: string; imageUrl: string; createdAt: string },
      void
    >({
      query: () => ({
        url: '/auth/me',
      }),
      providesTags: () => ['User'],
    }),

    editLogin: build.mutation<{ message: string }, { login: string }>({
      query: (body) => ({
        url: '/auth/me/editLogin',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    editEmail: build.mutation<{ message: string }, { email: string }>({
      query: (body) => ({
        url: '/auth/me/editEmail',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    editPassword: build.mutation<{ message: string }, { password: string }>({
      query: (body) => ({
        url: '/auth/me/editPassword',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});
