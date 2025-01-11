"use client";

import useEditor from "@/app/_hooks/useEditor";

export default function WritePage() {
  const { Editor } = useEditor();

  return (
    <div>
      <form action="">
        <input id="title" name="title" type="text" />
        <Editor />
      </form>
    </div>
  );
}
