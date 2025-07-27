import axios from "axios";
import { PostsResponse, Post, fetchParams } from "@/types/types";

const baseURL = "https://jsonplaceholder.typicode.com";

const apiServer = axios.create({ baseURL });

export async function fetchPosts(page?: number, limit?: number) {
    const params: fetchParams = {};

    if (page !== undefined) {
        params._page = page;
    }

    if (limit !== undefined) {
        params._limit = limit;
    }

    const response = await apiServer.get<Post[]>("/posts", {
        params,
    });

    const result: PostsResponse = {
        data: response.data,
        headers: {
            xTotalCount: response.headers["x-total-count"],
        },
    };

    return result;
}

export async function fetchPostById(id: number) {
    const res = await apiServer.get<Post>(`/posts/${id}`);
    return res.data;
}
