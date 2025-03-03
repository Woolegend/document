import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

interface PreviewProps {
  className?: string;
  content: string;
}

export default function Preview({ className, content }: PreviewProps) {
  return (
    <MarkdownPreview
      className={className}
      source={content}
      style={{ padding: 16 }}
    />
  );
}
