import { connectDB } from "@/database";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = (await connectDB).db("document");
    const result = await db.collection("post").findOne({
      title: "test",
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { title, content, tags } = await request.json();

  if (!title)
    return NextResponse.json({ error: "제목을 입력하세요" }, { status: 422 });

  if (!content)
    return NextResponse.json({ error: "내용을 입력하세요" }, { status: 422 });

  try {
    const db = (await connectDB).db("document");
    const result = await db.collection("post").insertOne({
      title: title.trim(),
      content,
      tags,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
