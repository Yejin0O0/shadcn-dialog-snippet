import MonacoEditor, { type OnChange } from "@monaco-editor/react";
import { useState } from "react";

interface CodeEditorProps {
  code: string;
  language?: string;
}

function CodeEditor({ code, language = "javascript" }: CodeEditorProps) {
  const [value, setValue] = useState<string>(code);

  const handleEditorChange: OnChange = (newValue) => {
    if (newValue !== undefined) {
      setValue(newValue);
    }
  };

  return (
    <MonacoEditor
      height="400px"
      defaultLanguage={language}
      defaultValue={value}
      onChange={handleEditorChange}
      theme="vs-dark"
    />
  );
}

export default CodeEditor;
