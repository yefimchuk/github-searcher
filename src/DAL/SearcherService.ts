import axios from "axios";


class SearcherService {

    async FetchUsersFromSearcher(userName: string) {
        return axios.get('search/users', {
            params: {
                q: userName,
                sort: 'followers ',
                per_page: 5
            }
        })
    }

    async FetchRepos(data: any) {

        return Promise.all(data.map((user: any) => axios.get(`search/repositories?q= user:${user.login} `, {
            params: {
                per_page: 1
            }

        })
            .then((response) => (response.data))));
    }

}

const searcherServiceInstance = new SearcherService()
export default searcherServiceInstance;