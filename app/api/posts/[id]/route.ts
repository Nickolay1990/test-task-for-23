import { NextResponse } from "next/server";
import { api } from "../../api";

interface GetProps {
    params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: GetProps) {
    const { id } = await params;
    try {
        const res = await api.get(`/posts/${id}`);
        if (res) {
            return NextResponse.json(res.data);
        }
    } catch {
        return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
    }
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
}
