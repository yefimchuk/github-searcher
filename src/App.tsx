import React from 'react';
import "../src/App.scss"
import 'antd/dist/antd.css';
import axios from "axios";
import {HomeRoute} from "./UI/routes/Routes";

function App() {
    axios.interceptors.request.use((config) => {
        config.baseURL = "https://api.github.com/";
        // @ts-ignore
        return config;
    });
    return (
        <div className="container">
            <HomeRoute />
        </div>
    );
}

export default App;
