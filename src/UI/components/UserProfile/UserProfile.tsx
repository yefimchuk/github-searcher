import React, {SyntheticEvent, useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Col, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../../BLL/profile/userProfile.slice";
import {selectFetchingUser, selectUserProfile,} from "../../../BLL/profile/userProfile.selector";
import "../UserProfile/User.scss";
import {BookOutlined, TeamOutlined} from "@ant-design/icons";
import UserRepos from "./UserRepos/UserRepos";
import {selectUserRepos} from "../../../BLL/userRepo/userRepo.selector";
import {REPOSITORIES_PER_PAGE} from "../../../DAL/GitHubService";
import {clearData, fetchUserRepo, setCurrentPageUserRepo,} from "../../../BLL/userRepo/userRepo.slice";
// @ts-ignore
import debounce from 'lodash.debounce';

const UserProfile = React.memo(() => {
    let isLogin = useSelector(selectFetchingUser);
    let user = useSelector(selectUserProfile);
    let {
        userRepoData,
        userRepoIsLoading,
        userRepoCurrentPage,
        userRepoTotalCount,
    } = useSelector(selectUserRepos);
    const [repoName, setRepoName] = useState<string>("");
    const {userName} = useParams<{ userName: string }>();
    let dispatch = useDispatch();

    const pagesCount = Math.ceil(userRepoTotalCount / REPOSITORIES_PER_PAGE);
    useEffect(() => {
        dispatch(fetchUser({userName}));
    }, [dispatch, userName]);

    useEffect(() => {
        dispatch(
            fetchUserRepo({userName,repoName, userRepoCurrentPage})
        );
    }, [dispatch, repoName,userName, userRepoCurrentPage]);

    const handleScroll = (event: SyntheticEvent) => {
        if (!userRepoIsLoading) {
            const {scrollHeight, scrollTop, clientHeight} = event.currentTarget;
            const isLoadMore =
                clientHeight + scrollHeight * 0.2 >
                Math.floor(scrollHeight - scrollTop);
            const isLastPage = userRepoCurrentPage < pagesCount;

            if (isLoadMore && isLastPage) {
                dispatch(setCurrentPageUserRepo(userRepoCurrentPage + 1));
            }
        }
    };

    const handleRepoNameChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {

        setRepoName(event.target.value);
        dispatch(clearData());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedUserNameChange = useCallback(
        debounce(handleRepoNameChange, 500),
        [repoName]
    );
    return (
        <div>
            <Row>
                <Col span={8}>
                    {!isLogin && user && (
                        <div className="user__profile">
                            <img className="user__profile_avatar" src={user.avatar_url}/>
                            <div className="user__profile_name">{user.name}</div>
                            <div className="user__profile_login">{user.login}</div>
                            <div className="user__profile_bio">{user.bio}</div>
                            <div className="user__profile_follow">
                                <TeamOutlined/>
                                <div className="user__profile_followers">
                                    {user.followers}{" "}
                                    <span className="user__profile_follow-text">followers</span>
                                </div>
                                <div className="user__profile_following">
                                    {user.following}{" "}
                                    <span className="user__profile_follow-text">following</span>
                                </div>
                            </div>
                        </div>
                    )}
                </Col>
                <Col span={16}>
                    <div className="user-repo-title-container">
                        <div className="user-repo-title">
                            <BookOutlined />
                            <div>Repositories {userRepoTotalCount}</div>
                        </div>
                        <input
                            placeholder='search repositories'
                            onChange={debouncedUserNameChange}
                            className="user-repo__input"
                            type="text"
                        />
                    </div>
                    <div className="user-repo-scroll" onScroll={handleScroll}>
                        <UserRepos userRepoData={userRepoData}/>
                    </div>
                </Col>
            </Row>
        </div>
    );
});
export default UserProfile;
