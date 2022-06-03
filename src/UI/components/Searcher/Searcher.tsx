import React, {useCallback, useEffect, useState} from "react";
import '../Searcher/searcher.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchRepos, fetchUsersFromSearch} from "../../../BLL/searcher/users.slice";
import Users from "./User";
// @ts-ignore
import debounce from 'lodash.debounce';
import {Pagination} from "antd";
import {selectIsLogin, selectTotalCount} from "../../../BLL/searcher/user.selector";
import {USERS_PER_PAGE} from "../../../DAL/GitHubService";
import SearcherLoader from "../Loaders/SearcherLoader";
const Searcher = React.memo(() => {
    const dispatch = useDispatch()
    const [userName, setUserName] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const handleUserNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setUserName(event.target.value);
    };
    let isLogin = useSelector(selectIsLogin)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedUserNameChange = useCallback(
        debounce(handleUserNameChange, 500), [userName],
    );
    let total = useSelector(selectTotalCount)

    total = total > 1000 ? 1000 : total;
    const pagesCount = Math.ceil(total / USERS_PER_PAGE);
    useEffect(() => {

        let fetchData = async () => {
            let res = await dispatch(fetchUsersFromSearch({userName, page}))
            dispatch(fetchRepos(res.payload.items))
        }
        fetchData().catch(key => console.error(key))
    }, [dispatch, userName, page])

    return (
      <div className="searcher">
        <input
          onChange={debouncedUserNameChange}
          className="searcher__input"
          type="text"
        />
        <div className="searcher__container">
          {isLogin ? <SearcherLoader /> : <Users />}
        </div>

        <Pagination
          className="user__pagination"
          onChange={(page, pageSize) => {
            setPage(page);
          }}
          current={page}
          total={pagesCount}
          pageSizeOptions={[0, 0, 0]}
          pageSize={1}
          responsive={false}
        />
      </div>
    );
})
    export default Searcher