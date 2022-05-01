import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import gitHubServiceInstance from "../../DAL/GitHubService";

export const fetchUser: any = createAsyncThunk(
    'userProfile/fetchUser',
    async ({userName, repoName, userRepoCurrentPage}: any, {rejectWithValue}) => { //Todo select type
        try {
            const userData = await gitHubServiceInstance.FetchUser(userName);
            return userData.data
        } catch (e) {
            return rejectWithValue(e)
        }


    },
);

export const userProfile = createSlice({
    name: 'userProfile',
    initialState: {
        userRepoIsFetching: false,
        user: null,
    } as any,

    reducers: {

    },
    extraReducers: {
        [fetchUser.pending]: (state, action) => {
            state.userRepoIsFetching = true
        },
        [fetchUser.fulfilled]: (state, action) => {
            state.user = action.payload
            state.userRepoIsFetching = false
        },
        [fetchUser.rejected]: (state, action) => {
            state.userRepoIsFetching = false
        },

    },
});

export default userProfile.reducer;