import React, {useRef} from "react";
import '../Searcher/searcher.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchRepos, fetchUsersFromSearch} from "../../../BLL/searcher/users.slice";
import {selectDataSearch, selectIsLogin, selectReposSearch} from "../../../BLL/searcher/user.selector";


const Searcher = React.memo(() => {
    let inputVal = useRef(null)
    let dispatch = useDispatch()
    let users = useSelector(selectDataSearch)
    let repos = useSelector(selectReposSearch)
    let isLogin = useSelector(selectIsLogin)
    let fetchData = async () => {
        let name = inputVal.current
        // @ts-ignore
        let res = await dispatch(fetchUsersFromSearch(name.value))
        dispatch(fetchRepos(res.payload.items))
    }

    return (
        <div className="searcher">
            <input onChange={fetchData} className="searcher__input" type="text" ref={inputVal}/>
            {isLogin ? <div>loading</div> : null}
        </div>
    );
})
    export default Searcher