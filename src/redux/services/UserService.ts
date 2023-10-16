import { ToDoApi } from './api';
import { IUser } from '@/types/IUser';

export const userApi = ToDoApi.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation<
      { accessToken: string; refreshToken: string },
      {
        login: string;
        email: string;
        password: string;
        passwordConfirmation: string;
      }
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

    getMe: build.query<IUser, void>({
      query: () => ({
        url: '/user',
      }),
      providesTags: () => ['User'],
    }),

    uppdateMe: build.mutation<void, { login: string; email: string }>({
      query: (body) => ({
        url: '/user',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    uploadPhoto: build.mutation<void, FormData>({
      query: (body) => ({
        url: '/user/upload',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    editPassword: build.mutation<
      void,
      { password: string; passwordConfirmation: string }
    >({
      query: (body) => ({
        url: '/user/update_password',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
  overrideExisting: false,
});
