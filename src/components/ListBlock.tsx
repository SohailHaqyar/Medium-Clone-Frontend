import React from "react";

import { Block } from "../pages/ArticleDetails";

interface BlockProps {
  block: Block;
}
export const ListBlock: React.FC<BlockProps> = ({ block }) => {
  return (
    <ul
      className={`${
        block.style === "ordered" ? "list-decimal" : "list-disc"
      } ml-4 my-2`}
    >
      {block.items.map((item, index) => (
        <li
          key={index}
          className="list-item my-4 text-base"
          dangerouslySetInnerHTML={{ __html: item }}
        />
      ))}
    </ul>
  );
};
