import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import gitHubServiceInstance from "../../DAL/GitHubService";
import { SearcherUserValue } from "../../types/InitialStateValue.types";

export const fetchUsersFromSearch: any = createAsyncThunk(
  "searcher/fetchUsersFromSearch",
  async ({ userName, page }: { userName: string; page: number }) => {
    const response = await gitHubServiceInstance.FetchUsersFromSearcher(
      userName,
      page
    );
    return response.data;
  }
);
export const fetchRepos: any = createAsyncThunk(
  "searcher/fetchPersonalUserInfo",
  async (data: any) => {
    return await gitHubServiceInstance.FetchUsersRepos(data);
  }
);

export const searcher = createSlice({
  name: "searcher",
  initialState: {
    users: null,
    repos: null,
    isLoading: false,
    total_count: null,
  } as SearcherUserValue,

  reducers: {},
  extraReducers: {
    [fetchUsersFromSearch.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchUsersFromSearch.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.total_count = action.payload.total_count;
    },
    [fetchUsersFromSearch.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [fetchRepos.pending]: (state, action) => {},
    [fetchRepos.fulfilled]: (state, action) => {
      state.repos = action.payload;
      state.isLoading = false;
    },
    [fetchRepos.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});
export let { putUser }: any = searcher.actions;
export default searcher.reducer;
