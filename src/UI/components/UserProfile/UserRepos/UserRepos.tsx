import React, { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../User.scss";
import { selectUserRepos } from "../../../../BLL/userRepo/userRepo.selector";
import {
  fetchUserRepo,
  setCurrentPageUserRepo,
} from "../../../../BLL/userRepo/userRepo.slice";
import { useParams } from "react-router-dom";
import "../UserRepos/userRepo.scss";
import { BookOutlined, ForkOutlined, StarOutlined } from "@ant-design/icons";
import { REPOSITORIES_PER_PAGE } from "../../../../DAL/GitHubService";
// @ts-ignore
import debounce from "*";

const UserRepos = React.memo(({userRepoData}: any) => {

  return (
    <div>

        {userRepoData && userRepoData.length !== 0 &&
          userRepoData.map((key: any) => (
            <div className="user__repo">
              <div>
                <div className="user__repo__name-flex">
                  <div className="user__repo__name">{key.name}</div>
                  <div className="user__repo__visibility">{key.visibility}</div>
                </div>
                <div>{key.language}</div>
              </div>
              <div>
                <div  className="user__repo__star">
                  <StarOutlined />
                  {key.stargazers_count}
                </div>
                <div  className="user__repo__star">
                  <ForkOutlined />
                  {key.forks_count}
                </div>
              </div>
            </div>
          ))}
      </div>

  );
});
export default UserRepos;
