import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CodeBlock } from "../components/CodeBlock";
import { HeaderBlock } from "../components/HeaderBlock";
import { ListBlock } from "../components/ListBlock";
import { ParagraphBlock } from "../components/ParagraphBlock";

export interface Block {
  type: "paragraph" | "header" | "code" | "list";
  style: "ordered" | "unordered";
  level: number;
  text: string;
  items: string[];
  code: string;
}

const URL = `http://localhost:8000/articles`;
export const ArticleDetails = () => {
  const params: any = useParams();
  const [article, setArticle] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      const response = await axios.get(`${URL}/${params.id}`);
      setArticle(response.data);
      setLoading(false);
    })();
  }, [params]);

  if (loading) return <h1>Loading...</h1>;
  return (
    <article className="w-full h-full flex items-center justify-center">
      <div className="w-1/2 bg-white mt-4 px-4 py-5">
        <h1 className="my-6 text-5xl font-semibold capitalize tracking-normal">
          {article?.title}
        </h1>
        {article?.blocks.map((block: Block, index: number) => {
          switch (block.type) {
            case "header":
              return index !== 0 ? (
                <HeaderBlock key={Math.random()} block={block} />
              ) : null;

            case "code":
              return <CodeBlock key={Math.random()} block={block} />;

            case "list":
              return <ListBlock key={Math.random()} block={block} />;

            case "paragraph":
              return (
                <ParagraphBlock key={Math.random()} block={block} />
              );

            default:
              return null;
          }
        })}
      </div>
    </article>
  );
};
