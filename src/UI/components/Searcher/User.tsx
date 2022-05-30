import React, {useEffect} from "react";
import { useSelector} from "react-redux";
import { selectReposSearch, selectUsersSearch} from "../../../BLL/searcher/user.selector";
import {Col, Row} from "antd";
import {NavLink, useParams} from "react-router-dom";

const Users = React.memo(() => {
    let users = useSelector(selectUsersSearch)
    let repos = useSelector(selectReposSearch)
    const match = useParams();

    useEffect(()=>{
        console.log(match)
    }, [match])
    return <>
        { users && repos &&
            <Row className="users-row" justify="space-between" align="top">
                <Col className="users-col">

                    {users.items.map((user: any) =>

                        <NavLink to={user.login} key={user.id}  className="user">
                        <div className='user__mainInfo' >
                            <img src={user.avatar_url} className='user__mainInfo__avatar'/>
                            <div className='user__mainInfo__nickname'>{user.login}</div>
                        </div>
                    </NavLink>)
                    }

                </Col>
                <Col className="users-col-rep">

                    {repos.map((user: any, index: number) => <div className="repos" key={index}>
                        <div className='user__count-repos'>
                            <div>repositories: {user.total_count}</div>
                        </div>
                    </div>)
                    }

                </Col>

            </Row>


       }

    </>

})
export default Users