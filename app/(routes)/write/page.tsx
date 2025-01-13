"use client";

import useEditor from "@/app/_hooks/useEditor";
import { createPost } from "@/app/_lib/post.api";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import TitleField from "./TitleField";
import UtilsWrap from "./UtilsWrap";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { InsertOneResult } from "mongodb";
import axios from "axios";

export default function WritePage() {
  const [title, setTitle] = useState("");
  // const [tags, setTags] = useState<string[]>([]);
  const { content, Editor } = useEditor();
  const { data, mutate, isPending, error } = useMutation({
    mutationFn: () => createPost({ title, content, tags: [] }),
  });
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);

  const handleSubmitPrevent = (event: KeyboardEvent<HTMLFormElement>) =>
    event.preventDefault();

  const handleClickSubmit = () => mutate();

  const handleCilckClose = () => router.push("/");

  useEffect(() => {
    const result = data?.data;
    if (!result) return;
    const { acknowledged, insertedId } = result as InsertOneResult<Document>;
    if (acknowledged) {
      router.push(`/post/${insertedId}`);
    }
  }, [router, data]);

  useEffect(() => {
    if (error && axios.isAxiosError(error)) {
      alert(error.response?.data.error);
    }
  }, [error]);
  return (
    <form
      className="flex flex-col min-h-dvh relative"
      onSubmit={handleSubmitPrevent}
    >
      <TitleField value={title} onChange={handleChange} />
      <Editor className="grow text-xl" enableScroll={false} />
      <UtilsWrap
        isPending={isPending}
        onClickClose={handleCilckClose}
        onClickSubmit={handleClickSubmit}
      />
    </form>
  );
}
