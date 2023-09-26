import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const userAPI = createApi({
    reducerPath:'userApi',
    baseQuery: fetchBaseQuery({baseUrl})
})