import { useState } from "react";
export const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export const useFetchApi = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [validationError, setValidationError] = useState(false);

  async function handleFetch() {
    setValidationError(false);
    try {
      const res = await fetch(url);
      const data = await res.json();

      setData(data.articles);
      setIsLoading(false);

      if (data.articles.length === 0) {
        setValidationError(true);
      }
    } catch (error) {
      setError("we can't reach the Api please try again later");
    }
  }

  return [
    handleFetch,
    data,
    setData,
    isLoading,
    error,
    setIsLoading,
    validationError,
  ];
};
