import {configureStore} from '@reduxjs/toolkit';
import {searcher} from "./searcher/users.slice";

export const store = configureStore({
    reducer: {
        searcher: searcher.reducer
    },
});

export default store;