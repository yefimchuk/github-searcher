export interface UserProfileValue {
  userRepoIsFetching: boolean;
  user: object | null;
}

export interface SearcherUserValue {
  users: object | null;
  repos: object | null;
  isLoading: boolean
  total_count: object | null;
}

export interface UserRepoValue {
  userRepoData: object[],
  userRepoIsLoading: boolean
  userRepoCurrentPage: number
  userRepoTotalCount: number
}
