import React from "react";
import {useSelector} from "react-redux";
import {selectIsLogin, selectReposSearch, selectUsersSearch} from "../../../BLL/searcher/user.selector";
import {Col, Row} from "antd";

const Users = React.memo(() => {
    let users = useSelector(selectUsersSearch)
    let repos = useSelector(selectReposSearch)
    let isLogin = useSelector(selectIsLogin)
    return <>
        {isLogin ? <div>loading</div> : users &&
            <Row justify="space-between" align="top">
                <Col>
                    <div className="user">
                        <div className='user__mainInfo'>
                            {users.items.map((user: any) => <div>
                                <img src={user.avatar_url} className='user__mainInfo__avatar'/>
                                <div className='user__mainInfo__nickname'>{user.login}</div>
                            </div>)
                            }
                        </div>
                    </div>
                </Col>
                <Col>
                    {repos.map((user: any) => <div className='user__count-repos'>
                        <div>repos: {user.totalCount}</div>
                    </div>)
                    }
                </Col>
            </Row>

        /*<div className="user">
            <div className='user__mainInfo'>
                {users.items.map((user: any) => <div>
                    <img src={user.avatar_url} className='user__mainInfo__avatar'/>
                    <div className='user__mainInfo__nickname'>{user.login}</div>
                    </div>)
                }</div>
            {repos.map((user: any) => <div className='user__count-repos'>
                <div>repos: {user.totalCount}</div>
            </div>)
            }

        </div>*/}

    </>

})
export default Users