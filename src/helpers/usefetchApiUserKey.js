import { useState } from "react";

const useFetchApiUserKey = (url) => {
  const [dataKey, setDataKey] = useState([]);
  const [isLoadingKey, setIsLoadingKey] = useState(false);
  const [errorKey, setErrorKey] = useState("");
  const [validationErrorKey, setValidationErrorKey] = useState(false);

  async function handleFetchKey() {
    setValidationErrorKey(false);
    try {
      const res = await fetch(url);
      const data = await res.json();

      setDataKey(data.articles);
      setIsLoadingKey(false);

      if (data.articles.length === 0) {
        setValidationErrorKey(true);
      }
    } catch (error) {
      setErrorKey("we can't reach the Api please try again later");
    }
  }

  return [
    handleFetchKey,
    dataKey,
    setDataKey,
    isLoadingKey,
    errorKey,
    setIsLoadingKey,
    validationErrorKey,
  ];
};
export default useFetchApiUserKey;
