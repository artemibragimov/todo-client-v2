import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken, removeToken, setToken } from '../../helpers/token';
import { baseUrl } from '../../helpers/constants/api';

import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { redirect } from '../../helpers/redirect';
import { setIsAuth } from '../../helpers/isAuth';
const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  credentials: 'include',
  prepareHeaders: (headers) => {
    headers.set('authorization', `bearer ${getToken()}`);
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(
      {
        url: '/auth/refresh',
      },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      setToken(refreshResult.data as string);

      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      redirect('/login');
      setIsAuth(false);
      removeToken();
    }
  }
  return result;
};

export const splitApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
