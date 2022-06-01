import {createSelector} from "reselect";

export const selectUserProfile = createSelector(
    (state: any) => state,
    (state) => state.userProfile.user,
);
export const selectFetchingUser = createSelector(
    (state: any) => state,
    (state) => state.userProfile.isLoading,
);
