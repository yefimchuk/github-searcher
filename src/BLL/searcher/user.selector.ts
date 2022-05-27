import { createSelector } from 'reselect';



export const selectDataSearch = createSelector(
    (state: any) => state,
    (state) => state.searcher.data,
);
export const selectReposSearch = createSelector(
    (state: any) => state,
    (state) => state.searcher.repos,
);
export const selectIsLogin = createSelector(
    (state: any) => state,
    (state) => state.searcher.isLoading,
);