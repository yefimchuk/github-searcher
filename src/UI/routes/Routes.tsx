import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import UserProfile from "../components/UserProfile/UserProfile";

export const HomeRoute = () => (
  <Routes>
    <Route path="*" element={<Home />} />
  </Routes>
);

export const ProfileRoute = () => (
  <Routes>
    <Route path="/:userName" element={<UserProfile />} />
  </Routes>
);
