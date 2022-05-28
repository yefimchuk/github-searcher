import { createSelector } from 'reselect';



export const selectUsersSearch = createSelector(
    (state: any) => state,
    (state) => state.searcher.users,
);
export const selectReposSearch = createSelector(
    (state: any) => state,
    (state) => state.searcher.repos,
);
export const selectIsLogin = createSelector(
    (state: any) => state,
    (state) => state.searcher.isLoading,
);