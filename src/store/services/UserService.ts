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

    uploadAvatar: build.mutation<{ url: string }, FormData>({
      query: (body) => ({
        url: '/auth/me/uploads',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    getMe: build.query<IUser, void>({
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
  overrideExisting: false,
});
