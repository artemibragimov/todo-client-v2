import { splitApi } from '.';
import { IUser } from '../../types/IUser';

const userApiWithTag = splitApi.enhanceEndpoints({ addTagTypes: ['User'] });

export const userApi = userApiWithTag.injectEndpoints({
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
        url: '/me',
      }),
      providesTags: () => ['User'],
    }),

    uppdateMe: build.mutation<
      void,
      { login: string; email: string } | FormData
    >({
      query: (body) => ({
        url: '/me',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    uploadPhoto: build.mutation<void, FormData>({
      query: (body) => ({
        url: '/me/uploads',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    editPassword: build.mutation<{ message: string }, { password: string }>({
      query: (body) => ({
        url: '/me/editPassword',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
  overrideExisting: false,
});
