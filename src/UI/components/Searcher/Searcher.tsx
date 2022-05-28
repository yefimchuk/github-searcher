import React, {useEffect, useState} from "react";
import '../Searcher/searcher.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchRepos, fetchUsersFromSearch} from "../../../BLL/searcher/users.slice";
import {selectIsLogin} from "../../../BLL/searcher/user.selector";
import Users from "./User";


const Searcher = React.memo(() => {
    const dispatch = useDispatch()
    const isLogin = useSelector(selectIsLogin)
    const [userName, setUserName] = useState<string>('');
    const handleUserNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setUserName(event.target.value);
    };

    useEffect(() => {
        let fetchData = async () => {
            let res = await dispatch(fetchUsersFromSearch(userName))
            dispatch(fetchRepos(res.payload.items))
        }
        fetchData().catch(key => console.error(key))
    },[dispatch, userName])

    return (
        <div className="searcher">
            <input onChange={handleUserNameChange} className="searcher__input" type="text"/>
           <Users/>
        </div>
    );
})
    export default Searcher