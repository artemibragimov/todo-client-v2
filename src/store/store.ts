import {configureStore} from '@reduxjs/toolkit';
import { taskApi } from './services/TaskService';
import { userApi } from './services/UserService';

export const store = configureStore({
    reducer: {
      [taskApi.reducerPath]: taskApi.reducer,
      [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskApi.middleware).concat(userApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;