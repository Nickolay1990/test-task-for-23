import axios from "axios";
import { Post } from "@/types/types";

const baseURL = "https://jsonplaceholder.typicode.com/";

const api = axios.create({ baseURL });

export async function fetchPosts() {
    const res = await api.get<Post[]>("/posts");
    return res.data;
}
