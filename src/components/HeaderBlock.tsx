import React from "react";
import { Block } from "../pages/ArticleDetails";

interface BlockProps {
  block: Block;
}

export const HeaderBlock: React.FC<BlockProps> = ({ block }) => {
  return (
    <div>
      <h1
        dangerouslySetInnerHTML={{ __html: block.text }}
        className={`${
          block.level === 2
            ? "text-4xl"
            : block.level === 3
            ? "text-2xl "
            : block.level === 4
            ? "text-xl"
            : block.level === 5
            ? "text-lg"
            : "text-base"
        } my-4 font-semibold`}
      />
    </div>
  );
};
