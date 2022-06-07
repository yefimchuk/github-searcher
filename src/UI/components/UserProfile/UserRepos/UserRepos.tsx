import React from "react";
import "../User.scss";
import "../UserRepos/userRepo.scss";
import { ForkOutlined, StarOutlined } from "@ant-design/icons";
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import loader from "../../../../assets/loader.gif";

const UserRepos = React.memo(({userRepoData}: any) => {

  return (
    <div>
      {!userRepoData && userRepoData.length !== 0 ? (
        <img src={loader} alt={loader} />
      ) : (
        userRepoData.map((item: any) => (
          <a href={item.html_url} key={item.id} className="user__repo">
            <div>
              <div className="user__repo__name-flex">
                <div className="user__repo__name">{item.name}</div>
                <div className="user__repo__visibility">{item.visibility}</div>
              </div>
              <div className="user__repo__language">{item.language}</div>
            </div>
            <div>
              <div className="user__repo__star">
                <StarOutlined />
                {item.stargazers_count}
              </div>
              <div className="user__repo__star">
                <ForkOutlined />
                {item.forks_count}
              </div>
            </div>
          </a>
        ))
      )}
    </div>
  );
});
export default UserRepos;
