import React from "react";
import {
  ArticleObjectProps,
  articleObject,
} from "../Interfaces/articleInterace";

const ArticleList: React.FC<ArticleObjectProps> = (props) => {
  const { articles, handleArticle } = props;
  return (
    <div className="bg-white py-5 sm:py-5">
      <div className="bg-white px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-left">
          <p className="mt-2 text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">
            Articles
          </p>
        </div>
      </div>

      {/* render articles */}
      <div className="bg-white px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <ul role="list" className="divide-y divide-gray-100 divide-y-1">
            {articles?.map((article: articleObject) => {
              return (
                <li
                  key={article.id}
                  className="flex justify-between gap-x-6 py-5 group block hover:bg-gray-100 px-1"
                >
                  <a
                    className="flex min-w-0 gap-x-4 "
                    href="#"
                    onClick={(e) => handleArticle(e, article.id)}
                  >
                    <div className=" min-w-0 flex-auto ">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {article.title}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {article.summary}
                      </p>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
