import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectReposSearch,
  selectUsersSearch,
} from "../../../BLL/searcher/user.selector";
import { Col, Image, Row } from "antd";
import { NavLink } from "react-router-dom";
import { clearData } from "../../../BLL/userRepo/userRepo.slice";

const Users = React.memo(() => {
  let users = useSelector(selectUsersSearch);
  let repos = useSelector(selectReposSearch);
  const dispatch = useDispatch();
  const handleClearData = () => {
    dispatch(clearData());
  };
  return (
    <>
      {users && repos && (
        <Row className="users-row" justify="space-between" align="top">
          <Col className="users-col">
            {users.items.map((user: any) => (
              <NavLink
                to={user.login}
                key={user.id}
                onClick={handleClearData}
                className="user"
              >
                <div className="user__mainInfo">
                  <Image
                    src={user.avatar_url}
                    className="user__mainInfo__avatar"
                  />

                  <div className="user__mainInfo__nickname">{user.login}</div>
                </div>
              </NavLink>
            ))}
          </Col>
          <Col className="users-col-rep">
            {repos.map((user: any, index: number) => (
              <div className="repos" key={index}>
                <div className="user__count-repos">
                  <div>repositories: {user.total_count}</div>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      )}
    </>
  );
});
export default Users;
