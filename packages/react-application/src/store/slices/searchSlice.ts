import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RESTService from "../../services/RESTService";
import { user } from "../../types/user.type";

export interface SearchState {
  result: null | user[];
  loading: boolean;
  matches: user[] | null;
}

const initialState: SearchState = {
  result: null,
  loading: false,
  matches: null,
};

const fetchUsers = createAsyncThunk(
  "search/fetchUsers",
  async (_, thunkAPI) => {
    const res: user[] = await RESTService.get<user[]>("/users");
    return res;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setLoading: (state: SearchState, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
    setAllMatches: (state: SearchState, action: { payload: user[] | null }) => {
      state.matches = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state: SearchState) => {
        state.loading = true;
      })
      .addCase(
        fetchUsers.fulfilled,
        (state: SearchState, action: { payload: user[] }) => {
          state.loading = false;
          state.result = action.payload;
        }
      );
  },
});

export const { setLoading, setAllMatches } = searchSlice.actions;
export { fetchUsers };

export default searchSlice.reducer;
