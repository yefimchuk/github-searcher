import React from "react";
import {useSelector} from "react-redux";
import {selectIsLogin, selectReposSearch, selectUsersSearch} from "../../../BLL/searcher/user.selector";
import {Col, Pagination, Row} from "antd";

const Users = React.memo(() => {
    let users = useSelector(selectUsersSearch)
    let repos = useSelector(selectReposSearch)
    let isLogin = useSelector(selectIsLogin)
    return <>
        {isLogin ? <div>loading</div> : users &&
            <Row className="users-row" justify="space-between" align="top">
                <Col className="users-col">

                    {users.items.map((user: any) => <div className="user">
                        <div className='user__mainInfo'>
                            <img src={user.avatar_url} className='user__mainInfo__avatar'/>
                            <div className='user__mainInfo__nickname'>{user.login}</div>
                        </div>
                    </div>)
                    }

                </Col>
                <Col className="users-col-rep">

                    {repos.map((user: any) => <div className="repos">
                        <div className='user__count-repos'>
                            <div>repositories: {user.total_count}</div>
                        </div>
                    </div>)
                    }

                </Col>
                <Pagination defaultCurrent={1} total={50}/>
            </Row>


       }

    </>

})
export default Users