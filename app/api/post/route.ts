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
    console.log(error);
    return NextResponse.json({ error: "Read Post Error #1" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { title, content } = await request.json();

  if (title && content) {
    try {
      const db = (await connectDB).db("document");
      const result = await db.collection("post").insertOne({
        title,
        content,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return NextResponse.json(result);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { error: "Create Post Error #1" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { error: "Create Post Error #2" },
      { status: 500 }
    );
  }
}
