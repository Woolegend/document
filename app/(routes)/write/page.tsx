"use client";

import useEditor from "@/app/_hooks/useEditor";
import { createPost } from "@/app/_lib/post.api";
import {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  useEffect,
  useState,
} from "react";
import TitleField from "./TitleField";
import UtilsWrap from "./UtilsWrap";
import { useMutation } from "@tanstack/react-query";

export default function WritePage() {
  const [title, setTitle] = useState("");
  // const [tags, setTags] = useState<string[]>([]);
  const { content, Editor } = useEditor();
  const { data, mutate, isPending } = useMutation({
    mutationFn: () => createPost({ title, content, tags: [] }),
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);

  const handleKeyDownEnter = (event: KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") event.preventDefault();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate();
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <form
      className="flex flex-col min-h-dvh relative"
      onSubmit={handleSubmit}
      onKeyDown={handleKeyDownEnter}
    >
      <TitleField value={title} onChange={handleChange} />
      <Editor className="grow text-xl" enableScroll={false} />
      <UtilsWrap isPending={isPending} />
    </form>
  );
}
