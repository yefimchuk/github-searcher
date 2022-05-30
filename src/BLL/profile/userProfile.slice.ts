import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import searcherServiceInstance from "../../DAL/SearcherService";

export const fetchUser: any = createAsyncThunk(
    'userProfile/fetchUser',
    async (userName: string, {rejectWithValue}) => {
        try {
            const response = await searcherServiceInstance.FetchUser(userName);

            return response.data;
        }
        catch (e) {

         return rejectWithValue(e)
        }


    },
);

export const userProfile = createSlice({
    name: 'userProfile',
    initialState: {
        isLogin: false,
        user: null,
        repo: null,
    } as any,

    reducers: {},
    extraReducers: {
        [fetchUser.pending]: (state, action) => {

            state.isLogin = true
        },
        [fetchUser.fulfilled]: (state, action) => {

            state.isLogin = false
            state.user = action.payload
        },
        [fetchUser.rejected]: (state, action) => {
            state.isLogin = false
        },
    },
});

export default userProfile.reducer;