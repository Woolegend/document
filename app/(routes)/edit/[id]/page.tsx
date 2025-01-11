"use client";

import { useParams } from "next/navigation";

export default function EditPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>수정 페이지임</h1>
      <div>{id}</div>
    </div>
  );
}
