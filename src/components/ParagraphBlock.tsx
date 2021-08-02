import React from "react";
import { Block } from "../pages/ArticleDetails";

interface BlockProps {
  block: Block;
}
export const ParagraphBlock: React.FC<BlockProps> = ({ block }) => {
  return (
    <div
      className="text-lg my-6"
      dangerouslySetInnerHTML={{ __html: block.text }}
    />
  );
};
