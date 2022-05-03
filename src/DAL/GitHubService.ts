import axios from "axios";

export const USERS_PER_PAGE = 5;
export const REPOSITORIES_PER_PAGE = 30;
class GitHubService {
  private headers = {
    Authorization: `token ${process.env.REACT_APP_ACCESS_TOKEN}`,
  };
  async FetchUsersFromSearcher(userName: string, page: number) {
    return axios.get("search/users", {
      headers: this.headers,
      params: {
        q: userName || "a",
        sort: "followers ",
        per_page: USERS_PER_PAGE,
        page: page || 1,
      },
    });
  }

  async FetchUsersRepos(data: any) {
    return Promise.all(
      data.map((user: any) =>
        axios
          .get(`search/repositories?q= user:${user.login} `, {
            headers: this.headers,
            params: {
              per_page: 1,
            },
          })
          .then((response) => response.data)
      )
    );
  }

  async FetchUser(userName: string) {
    return axios.get(`/users/${userName}`, {
      headers: this.headers,
      params: {},
    });
  }

  async FetchRepos(
    userName: string,
    repoName: string,
    userRepoCurrentPage: number
  ) {
    return axios.get(
      `/search/repositories?q=${repoName || ""} user:${userName}`,
      {
        headers: this.headers,
        params: {
          per_page: REPOSITORIES_PER_PAGE,
          page: userRepoCurrentPage || 1,
        },
      }
    );
  }
}

const gitHubServiceInstance = new GitHubService();
export default gitHubServiceInstance;
