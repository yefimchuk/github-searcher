import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {Col, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../../BLL/profile/userProfile.slice";
import {selectFetchingUser, selectUserProfile} from "../../../BLL/profile/userProfile.selector";
import '../UserProfile/User.scss'
import {TeamOutlined} from "@ant-design/icons";

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
                {!isLogin && user && <div className='user__profile'>

                    <img className='user__profile_avatar' src={user.avatar_url}/>
                    <div className='user__profile_name'>{user.name}</div>
                    <div className='user__profile_login'>{user.login}</div>
                    <div className='user__profile_bio'>{user.bio}</div>
                    <div className='user__profile_follow'>
                        <TeamOutlined/>
                        <div className='user__profile_followers'>{user.followers} <span
                            className='user__profile_follow-text'>followers</span></div>
                        <div className='user__profile_following'>{user.following} <span
                            className='user__profile_follow-text'>following</span></div>
                    </div>
                </div>
                }


            </Col>
            <Col>ad</Col>
        </Row>
    </div>
})
export default UserProfile