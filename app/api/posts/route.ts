import { NextResponse } from "next/server";
import { api } from "../api";
import { Post } from "@/types/types";

export async function GET() {
    try {
        const res = await api.get<Post[]>("/posts");
        if (res) {
            return NextResponse.json(res.data);
        }
    } catch {
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
}
