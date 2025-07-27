export interface PostsResponse {
    data: Post[];
    headers: {
        xTotalCount: string;
    };
}

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface fetchParams {
    _page?: number;
    _limit?: number;
}
