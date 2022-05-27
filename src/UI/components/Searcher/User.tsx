import React from "react";
import {useSelector} from "react-redux";
import {selectDataSearch, selectIsLogin, selectReposSearch} from "../../../BLL/searcher/user.selector";

const User = React.memo(() => {
    let users = useSelector(selectDataSearch)
    let repos = useSelector(selectReposSearch)
    let isLogin = useSelector(selectIsLogin)

    return <>
        {isLogin ? <div className="user">
            {users.items.map((user: any) => <div className='user__mainInfo'>
                <img src={user.avatar_url} className='user__mainInfo__avatar'/>
                <div className='user__mainInfo__nickname'>{user.login}</div>
            </div>)
            }
            {repos.map((user: any) => <div className='user__count-repos'>
                <div>repos: {user.totalCount}</div>
            </div>)
            }

        </div> : <div>loading</div>
        }
    </>

})
export default User