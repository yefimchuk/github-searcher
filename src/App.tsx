import {Col, Row} from 'antd';
import React from 'react';
import githubLogo from '../src/assets/github-logo.png'
import "../src/App.scss"
import 'antd/dist/antd.css';

function App() {
    return (
        <div className="app">
            <Row className="app__header">
                <Col span={24}>
                    <div className="app__header_flex">
                        <img className="app__header-logo_img" alt={githubLogo} src={githubLogo}/><div
                        className="app__header-text"
                    >Github searcher</div>
                    </div>
                </Col>

            </Row>
            <Row>
                <Col span={12}>col-12</Col>
                <Col span={12}>col-12</Col>
            </Row>
            <Row>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
            </Row>
            <Row>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
            </Row>

        </div>
    );
}

export default App;
