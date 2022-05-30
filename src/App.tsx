import {Col, Row} from 'antd';
import React from 'react';
import githubLogo from '../src/assets/github-logo.png'
import "../src/App.scss"
import 'antd/dist/antd.css';
import axios from "axios";
import Searcher from "./UI/components/Searcher/Searcher";
import {HomeRoute} from "./UI/routes/Routes";

function App() {
    axios.interceptors.request.use((config) => {
        config.baseURL = "https://api.github.com/";
        // @ts-ignore
        config.headers['Authorization'] = `token ${process.env.REACT_APP_ACCESS_TOKEN}`

        return config;
    });
    console.log(`token ${process.env.REACT_APP_ACCESS_TOKEN}`)
    return (
        <div className="container">
            <HomeRoute />
        </div>
    );
}

export default App;
