import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {Col, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../../BLL/profile/userProfile.slice";
import {selectFetchingUser, selectUserProfile} from "../../../BLL/profile/userProfile.selector";

const UserProfile = React.memo(() => {
    let {userName} = useParams()
    let isLogin = useSelector(selectFetchingUser)
    let user = useSelector(selectUserProfile)
    console.log(user)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUser(userName))
    }, [dispatch, userName])
    return <div>
        <Row>
            <Col span={10}>
                {!isLogin && user && <div>

                    <img src={user.avatar_url}/>
                    <div>{user.name}</div>
                    <div>{user.login}</div>
                    <div>{user.bio}</div>
                    <div>{user.followers}</div>
                    <div>{user.following}</div>


                    <div></div>
                </div>
                }


            </Col>
            <Col>ad</Col>
        </Row>
    </div>
})
export default UserProfile