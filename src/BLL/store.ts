import { configureStore } from "@reduxjs/toolkit";
import { searcher } from "./searcher/users.slice";
import { userProfile } from "./profile/userProfile.slice";
import { userRepo } from "./userRepo/userRepo.slice";

export const store = configureStore({
  reducer: {
    searcher: searcher.reducer,
    userProfile: userProfile.reducer,
    userRepo: userRepo.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
