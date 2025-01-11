import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

interface PreviewProps {
  content: string;
}

export default function Preview({ content }: PreviewProps) {
  return <MarkdownPreview source={content} style={{ padding: 16 }} />;
}
