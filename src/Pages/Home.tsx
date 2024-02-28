"use client";
import React, { useEffect, useState } from "react";
import { getApiCall } from "../Apis/api";
import { articleObject } from "../Interfaces/articleInterace";
import ArticleList from "../Components/ArticleList";
import Article from "../Components/Article";
import Loader from "../Components/Loader";
// import { useErrorBoundary } from "react-error-boundary";
import ArticlesFetchError from "../Components/Error/ErrorBoundry";

const Articles: React.FC = () => {
  const initialObj = {
    id: "",
    title: "",
    summary: "",
  };
  const [articles, setArticles] = useState([]);
  const [articalObj, setArticalObj] = useState<articleObject>(initialObj);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState<any>(null);

  // const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    try {
      const response = await getApiCall("assignment/articles");
      if (response && response.length) {
        setArticles(response);
        setLoader(false);
      }
    } catch (err: any) {
      setLoader(false);
      // showBoundary(err);
      setError(err);
    }
  };

  const handleArticle = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    try {
      e.preventDefault();
      setLoader(true);
      if (id) {
        const response = await getApiCall(`assignment/articles/${id}`);
        if (response) {
          setArticalObj(response);
          setLoader(false);
        }
      }
    } catch (err: any) {
      console.log("err", err);
      setLoader(false);
      setError(err);
      // showBoundary(err);
    }
  };

  return (
    <div>
      {loader && <Loader />}

      {!loader && error && (
        <ArticlesFetchError
          {...error}
          reset={() => {
            setArticalObj({
              id: "",
              title: "",
              summary: "",
            });
            setError(null);
          }}
        />
      )}

      {!loader && articles.length > 0 && articalObj.id == "" && !error && (
        <ArticleList articles={articles} handleArticle={handleArticle} />
      )}
      {!loader && articalObj.id != "" && !error && (
        <Article
          {...articalObj}
          reset={() =>
            setArticalObj({
              id: "",
              title: "",
              summary: "",
            })
          }
        />
      )}
    </div>
  );
};

export default Articles;
