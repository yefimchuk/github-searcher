import React, {SyntheticEvent} from "react";
import {useSelector} from "react-redux";

import {selectUserRepos} from "../../../BLL/profile/userProfile.selector";
import {List} from "antd";
import '../UserProfile/User.scss'
const UserRepos = () => {
    let repo = useSelector(selectUserRepos)
    let userRepoIsLoading = true
    const handleScroll = (event: SyntheticEvent) => {

        if (userRepoIsLoading) {

            const {scrollHeight, scrollTop, clientHeight} = event.currentTarget;
            const isLoadMore = clientHeight + scrollHeight * 0.2 > Math.floor(scrollHeight - scrollTop);
            const isLastPage = 1 < 2;
            if (isLoadMore && isLastPage) {

            }
        }
    };
    return (
        <List>
            <div
                className="user-repo-scroll"
                onScroll={handleScroll}
            >

                {repo && repo.items.map((key: any) => <div>{key.id}</div>
                )}
            </div>

        </List>
    )
}
export default UserRepos