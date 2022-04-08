import { createSlice, createAsyncThunk, ActionCreatorWithPayload } from "@reduxjs/toolkit";
import RESTService from "../../services/RESTService";
import { user } from "../../types/user.type";

export interface UserState {
  user: null | user;
  loading: boolean;
}

const initialState: UserState = {
  user: null,
  loading: false,
};

const fetchUser = createAsyncThunk(
  "user/fetchUsers",
  async (userId: string, thunkAPI) => {
    const res: user = await RESTService.get<user>(`/users/${userId}`);
    return res;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
      builder
      .addCase(fetchUser.pending, (state: UserState)=>{
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state: UserState, action: {payload: user})=>{
        state.user = action.payload;
        state.loading = false;
      })
  },
});

export { fetchUser };

export default userSlice.reducer;
