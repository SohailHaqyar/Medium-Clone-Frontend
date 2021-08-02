import React from "react";
import { Block } from "../pages/ArticleDetails";
import Prism from "prismjs";
// import "prismjs/themes/prism-tomorrow.css";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect } from "react";
interface BlockProps {
  block: Block;
}
export const CodeBlock: React.FC<BlockProps> = ({ block }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code">
      <pre>
        <code className="language-javascript">{block.code}</code>
      </pre>
    </div>
  );
};
