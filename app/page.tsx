"use client";

import useEditor from "./_hooks/useEditor";

export default function Home() {
  const { content, Editor } = useEditor();

  console.log(content);

  return (
    <div>
      <h1>Home Page</h1>
      <Editor />
    </div>
  );
}
