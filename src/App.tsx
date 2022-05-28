import {Col, Row} from 'antd';
import React from 'react';
import githubLogo from '../src/assets/github-logo.png'
import "../src/App.scss"
import 'antd/dist/antd.css';
import axios from "axios";
import Searcher from "./UI/components/Searcher/Searcher";

function App() {
    axios.interceptors.request.use((config) => {
        config.baseURL = "https://api.github.com/";
        // @ts-ignore
        config.headers['Authorization'] = `token ${process.env.REACT_APP_ACCESS_TOKEN}`

        return config;
    });
    console.log(`token ${process.env.REACT_APP_ACCESS_TOKEN}`)
    return (

        <div className="app">
            <Row className="app__header">
                <Col span={24}>
                    <div className="app__header_flex">
                        <img className="app__header-logo_img" alt={githubLogo} src={githubLogo}/>
                        <div
                            className="app__header-text"
                        >Github searcher
                        </div>
                    </div>
                </Col>

            </Row>
            <Row>
                <Col span={8}><Searcher/></Col>
                <Col span={16}>ada</Col>
            </Row>
            <Row>

            </Row>

        </div>
    );
}

export default App;
