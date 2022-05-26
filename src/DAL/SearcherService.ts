import axios from "axios";

class SearcherService {

    async FetchUsersFromSearcher() {
        return axios.get('search/users', {
            params: {
                q: 'yefimchuk',
                sort: 'followers '
            }
        })
    }

    async FetchPersonalInfo() {
        return axios.get(`users/username/yefimchuk`, {
            params: {
                username: 'yefimchuk',

            }
        })
    }
}

const searcherServiceInstance = new SearcherService()
export default searcherServiceInstance;