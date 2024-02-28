import React from "react";
import { articleObject } from "../Interfaces/articleInterace";

const Article: React.FC<articleObject> = (props) => {
  const { title, summary, fullText, reset } = props;
  return (
    <div className="bg-white py-5 sm:py-5">
      <button className="btn" onClick={reset}>
        <svg
          className="self-end"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M10.843 13.069L6.232 8.384a.546.546 0 0 1 0-.768l4.61-4.685a.552.552 0 0 0 0-.771a.53.53 0 0 0-.759 0l-4.61 4.684a1.65 1.65 0 0 0 0 2.312l4.61 4.684a.53.53 0 0 0 .76 0a.552.552 0 0 0 0-.771"
          ></path>
        </svg>{" "}
      </button>
      <div className="bg-white px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-left">
          <p className="mt-2 text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">
            {title}
          </p>
        </div>
      </div>

      {/* render articles */}
      <div className="bg-white px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="py-3 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div className="mt-5">
              <h2 className="text-sm font-medium text-gray-900">Summary</h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{summary}</p>
              </div>
            </div>

            <div className="mt-5">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{fullText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
