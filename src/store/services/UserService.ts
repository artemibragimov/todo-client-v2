import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getTokenFromLocalStorage } from "../../helper/token";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    signUp: build.mutation<
      { token: string },
      { login: string; email: string; password: string }
    >({
      query: (userData) => ({
        url: "/signup",
        method: "POST",
        body: userData,
      }),
    }),

    signIn: build.mutation<
      { token: string },
      { login: string; password: string }
    >({
      query: (userData) => ({
        url: "/login",
        method: "POST",
        body: userData,
      }),
    }),

    uploadAvatar: build.mutation<{ url: string }, FormData>({
      query: (body) => ({
        url: "/uploads",
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      }),
      invalidatesTags: ["User"],
    }),

    getMe: build.query<
      { login: string; email: string; imageUrl: string; createdAt: string },
      ""
    >({
      query: () => ({
        url: "/me",
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      }),
      providesTags: () => ["User"],
    }),
  }),
});
