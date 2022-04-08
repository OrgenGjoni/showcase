import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
