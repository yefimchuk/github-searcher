import { createSelector } from "reselect";

export const selectUserRepos = createSelector(
  (state: any) => state,
  (state) => state.userRepo
);
