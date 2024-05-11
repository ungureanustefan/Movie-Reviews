import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter/counterSlice";
import { moviesApi } from "./slices/movies/moviesApiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
