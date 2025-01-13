import instance from "./axios";

interface CreatePostParams {
  title: string;
  content: string;
  tags: string[];
}

async function createPost({ title, content, tags }: CreatePostParams) {
  return await instance.post("/post", {
    title,
    content,
    tags,
  });
}

export { createPost };
