import { configureStore } from "@reduxjs/toolkit";
import userStateReducer from "./features/user/userSlice";
import reportStateReducer from "./features/report/reportSlice";

export const store = configureStore({
  reducer: {
    user: userStateReducer,
    report: reportStateReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
