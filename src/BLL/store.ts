import {configureStore} from '@reduxjs/toolkit';
import {searcher} from "./searcher/users.slice";
import {userProfile} from "./profile/userProfile.slice";

export const store = configureStore({
    reducer: {
        searcher: searcher.reducer,
        userProfile: userProfile.reducer
    },
});

export default store;