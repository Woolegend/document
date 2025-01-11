"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/write">글쓰기</Link>
      <Link href="/post">게시글</Link>
    </div>
  );
}
