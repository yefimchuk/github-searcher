import React from "react";
import "antd/dist/antd.css";
import axios from "axios";
import { HomeRoute } from "./UI/routes/Routes";

function App() {
  axios.interceptors.request.use((config) => {
    config.baseURL = "https://api.github.com/";
    return config;
  });
  return (
    <div>
      <HomeRoute />
    </div>
  );
}

export default App;
