import { useRef, useState } from "react";
import ReactQuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function NewsEditor({
  onEditorContentChange,
  content,
  ...rest
}) {
  return (
    <div {...rest}>
      <ReactQuillEditor
        theme="snow"
        value={content}
        onChange={onEditorContentChange}
      />
    </div>
  );
}
