import axios from "axios";


class SearcherService {

    async FetchUsersFromSearcher(userName: string, page: number) {
        return axios.get('search/users', {

            params: {
                q: userName || 'a',
                sort: 'followers ',
                per_page: 3,
                page: page || 1
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
    async FetchUser(userName: string) {
        return axios.get(`/users/${userName}`, {
            params: {
            }
        })
    }

}

const searcherServiceInstance = new SearcherService()
export default searcherServiceInstance;