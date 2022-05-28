import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import searcherServiceInstance from "../../DAL/SearcherService";

export const fetchUsersFromSearch: any = createAsyncThunk(
    'searcher/fetchUsersFromSearch',
    async (userName: string) => {

        const response = await searcherServiceInstance.FetchUsersFromSearcher(userName);
        return response.data;
    },
);
export const fetchRepos: any = createAsyncThunk(
    'searcher/fetchPersonalUserInfo',
    async (data: any) => {

        return await searcherServiceInstance.FetchRepos(data);
    },
);

export const searcher = createSlice({
    name: 'searcher',
    initialState: {
        users: null,
        repos: null,
        isLoading: false,
    },
    reducers: {},
    extraReducers: {
        [fetchUsersFromSearch.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchUsersFromSearch.fulfilled]: (state, action) => {
            state.users = action.payload
        },
        [fetchUsersFromSearch.rejected]: (state, action) => {
            state.isLoading = false
        },
        [fetchRepos.pending]: (state, action) => {

        },
        [fetchRepos.fulfilled]: (state, action) => {
            state.repos = action.payload
            state.isLoading = false
        },
        [fetchRepos.rejected]: (state, action) => {
            state.isLoading = false
        },
    },
});

export default searcher.reducer;