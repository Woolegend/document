import dynamic from "next/dynamic";
import "@/styles/markdown-editor.css";
import "@/styles/markdown-preview.css";
import { Commands } from "@uiw/react-markdown-editor/cjs/components/ToolBar";
import { useCallback, useState } from "react";

const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false },
);

const TOOLBARS: Commands[] = [
  "bold",
  "italic",
  "underline",
  "strike",
  "header",
  "olist",
  "ulist",
  "quote",
  "image",
  "code",
];

interface EditorProps {
  className?: string;
  visible?: boolean;
  enableScroll?: boolean;
}

export default function useEditor(initContent: string = "Hello Markdown!") {
  const [content, setContent] = useState(initContent);

  const handleChange = (value: string) => setContent(value);

  const Editor = useCallback(
    ({ className, visible = true, enableScroll = true }: EditorProps) => (
      <MarkdownEditor
        className={className}
        value={initContent}
        visible={visible}
        enableScroll={enableScroll}
        onChange={handleChange}
        toolbars={TOOLBARS}
        toolbarsMode={["preview"]}
      />
    ),
    [initContent],
  );

  return { content, Editor };
}
