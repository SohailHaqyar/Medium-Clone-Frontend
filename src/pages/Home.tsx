import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ArticleCard } from "../components/Article";

const URL = `http://localhost:8000/articles`;
export const Home = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await axios.get(URL);
      setArticles(response.data);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="h-screen">
      <h1 className="text-center text-3xl m2-4">All Articles</h1>
      {loading ? (
        <h1 className="text-center text-3xl mt-5">Loading...</h1>
      ) : (
        <ul className="flex flex-col items-center mt-4 ">
          {articles?.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </ul>
      )}
    </div>
  );
};
