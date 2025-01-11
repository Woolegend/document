import dynamic from "next/dynamic";
import "@/app/_styles/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { Commands } from "@uiw/react-markdown-editor/cjs/components/ToolBar";
import { useCallback, useState } from "react";

const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false }
);

const TOOLBARS: Commands[] = [
  "bold",
  "italic",
  "underline",
  "strike",
  "header",
  "olist",
  "ulist",
  "todo",
  "quote",
  "image",
  "code",
];

interface EditorProps {
  visible?: boolean;
  enableScroll?: boolean;
}

export default function useEditor(initContent: string = "Hello Markdown!") {
  const [content, setContent] = useState(initContent);

  const handleChange = (value: string) => setContent(value);

  const Editor = useCallback(
    ({ visible = true, enableScroll = true }: EditorProps) => (
      <MarkdownEditor
        value={initContent}
        visible={visible}
        height="500px"
        enableScroll={enableScroll}
        onChange={handleChange}
        toolbars={TOOLBARS}
        toolbarsMode={[]}
        enablePreview={false}
      />
    ),
    [initContent]
  );

  return { content, Editor };
}
