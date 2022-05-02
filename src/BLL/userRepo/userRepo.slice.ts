import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import gitHubServiceInstance from "../../DAL/GitHubService";
import {UserRepoValue} from "../../types/InitialStateValue.types";

interface FetchUserRepoProps {
  userName: string;
  repoName: string;
  userRepoCurrentPage: number;
}

export const fetchUserRepo: any = createAsyncThunk(
  "userRepo/fetchUserRepo",
  async ({ userName, repoName, userRepoCurrentPage }: FetchUserRepoProps) => {
    try {
      return await gitHubServiceInstance.FetchRepos(
        userName,
        repoName,
        userRepoCurrentPage
      );
    } catch (item) {
      console.log(item);
    }
  }
);

export const userRepo = createSlice({
  name: "userRepo",
  initialState: {
    userRepoData: [],
    userRepoIsLoading: false,
    userRepoCurrentPage: 1,
    userRepoTotalCount: 0,
  } as UserRepoValue,
  reducers: {
    setCurrentPageUserRepo(state, action) {
      state.userRepoIsLoading = true;
      state.userRepoCurrentPage = action.payload;
    },
    clearData(state) {
      state.userRepoCurrentPage = 1;
      state.userRepoData = [];
      state.userRepoTotalCount = 0;
    },
  },
  extraReducers: {
    [fetchUserRepo.pending]: (state, action) => {
      state.userRepoIsLoading = true;
    },
    [fetchUserRepo.fulfilled]: (state, action) => {
      const { items } = action.payload.data;
      // @ts-ignore
      state.userRepoData.push(...items);
      state.userRepoTotalCount = action.payload.data.total_count;
      state.userRepoIsLoading = false;
    },
    [fetchUserRepo.rejected]: (state, action) => {
      state.userRepoIsLoading = false;
    },
  },
});

export default userRepo.reducer;

export const { setCurrentPageUserRepo, clearData } = userRepo.actions;
