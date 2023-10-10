import { configureStore } from '@reduxjs/toolkit';
import { ToDoApi } from './services';

export const store = configureStore({
  reducer: {
    [ToDoApi.reducerPath]: ToDoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ToDoApi.middleware),
});
