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
        data: [],
        repos: [],
        isLoading: false,
    },
    reducers: {},
    extraReducers: {
        [fetchUsersFromSearch.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchUsersFromSearch.fulfilled]: (state, action) => {
            state.data = action.payload
        },
        [fetchUsersFromSearch.rejected]: (state, action) => {

        },
        [fetchRepos.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchRepos.fulfilled]: (state, action) => {
            state.isLoading = false
            state.repos = action.payload
        },
        [fetchRepos.rejected]: (state, action) => {
            state.isLoading = false
        },
    },
});

export default searcher.reducer;