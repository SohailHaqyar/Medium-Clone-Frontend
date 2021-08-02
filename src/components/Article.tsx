import moment from "moment";
import React from "react";
import { Link, useHistory } from "react-router-dom";

type Props = React.FC<{ article: Article }>;

interface Article {
  title: string;
  imageURL: string;
  createdAt: string;
  _id: string;
}

export const ArticleCard: Props = ({ article }) => {
  const { push } = useHistory();
  return (
    <li
      className="bg-white w-1/3 mb-2 rounded flex items-center p-4 hover:bg-gray-100 cursor-pointer"
      onClick={() => {
        push("/article/" + article._id);
      }}
    >
      <div>
        <div className="flex space-x-3">
          <div className="flex-shrink-0">
            <img
              src={`http://source.unsplash.com/random`}
              alt=""
              className="rounded-full w-12 h-12"
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900">
              <Link to="/">sohail haqyar</Link>
            </p>
            <p className="text-sm text-gray-500">
              <span>{moment(article.createdAt).fromNow()}</span>
            </p>
          </div>
        </div>
        <h2 className="mt-4 text-xl font-medium capitalize text-gray-900">
          {article.title}
        </h2>
      </div>
    </li>
  );
};
