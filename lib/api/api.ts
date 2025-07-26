import axios from "axios";
import { Post } from "@/types/types";

const baseURL = "http://localhost:3000/api";

const apiServer = axios.create({ baseURL });

export async function fetchPosts() {
    const res = await apiServer.get<Post[]>("/posts");
    return res.data;
}

export async function fetchPostById(id: number) {
    const res = await apiServer.get<Post>(`/posts/${id}`);
    return res.data;
}
