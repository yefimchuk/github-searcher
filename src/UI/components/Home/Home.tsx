import React from "react";
import {Col, Row} from "antd";
import githubLogo from "../../../assets/github-logo.png";
import Searcher from "../Searcher/Searcher";
import {ProfileRoute} from "../../routes/Routes";

const Home = () => {
    return    <div className="app">
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
            <Col span={16}><ProfileRoute/></Col>
        </Row>
        <Row>

        </Row>

    </div>
}
export default Home