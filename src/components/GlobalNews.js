import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/context";
import RenderArticle from "./renderArticle";
import userFavoriteKeys from "../helpers/userFavoriteKeys";
import useFetchApiUserKey from "../helpers/usefetchApiUserKey";
import useAllUserKeys from "../helpers/useAllUserKeys";
import handleDelete from "../helpers/handleDelete";
import Footer from "./Footer";
import { useFetchApi, API_KEY } from "../helpers/usefetchApi";
const GlobalNews = () => {
  const { handleSubmit, userID } = useContext(GlobalContext);
  const [searchKey, setSearchKey] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [lang, setLang] = useState("");
  const [sort, setSort] = useState("");
  const [userKeys, setUserKeys] = useState([]);
  const [userSearchKey, setUserSearchKey] = useState("");
  const [renderUserKey, setRenderUserKey] = useState(false);

  const handleSearchKey = (e) => {
    setSearchKey(e.target.value);
  };

  const handleFromDate = (e) => {
    setFromDate(e.target.value);
  };
  const handleToDate = (e) => {
    setToDate(e.target.value);
  };
  const handleLang = (e) => {
    setLang(e.target.value);
  };
  const handleSort = (e) => {
    setSort(e.target.value);
  };

  useAllUserKeys(userID, setUserKeys);

  const [
    handleFetch,
    data,
    setData,
    isLoading,
    error,
    setIsLoading,
    validationError,
  ] = useFetchApi(
    `https://gnews.io/api/v4/search?${
      searchKey === "" || searchKey === " " ? "" : "q=" + searchKey
    }${fromDate === "" || fromDate === " " ? "" : "&from=" + fromDate}${
      toDate === "" || toDate === " " ? "" : "&to=" + toDate
    }${lang === "" || lang === " " ? "" : "&lang=" + lang}${
      sort === "" || sort === " " ? "" : "&sortby=" + sort
    }&token=${API_KEY}`
  );

  const [
    handleFetchKey,
    dataKey,
    setDataKey,
    isLoadingKey,
    errorKey,
    setIsLoadingKey,
    validationErrorKey,
  ] = useFetchApiUserKey(
    `https://gnews.io/api/v4/search?${"q=" + userSearchKey}&token=${API_KEY}`
  );
  const handleKeySearch = (e) => {
    setUserSearchKey(e.target.innerText);
    setRenderUserKey(true);
  };

  useEffect(() => {
    if (userSearchKey) {
      setIsLoadingKey(true);
      setDataKey([]);
      setData([]);
      handleFetchKey();
    }
  }, [userSearchKey]);

  const handleDeleteUserKey = (url) => {
    const deleteItem = dataKey.filter((article) => article.url !== url);
    setDataKey(deleteItem);
  };

  return (
    <div>
      <form
        className="search-form"
        onSubmit={(e) =>
          handleSubmit(
            e,
            setData,
            handleFetch,
            setIsLoading,
            userFavoriteKeys,
            searchKey,
            userID
          )
        }
      >
        <label className="inputLabel">Search Key *</label>
        <input
          className="search-input"
          value={searchKey}
          placeholder="Search Key"
          onChange={handleSearchKey}
          required
        />

        <br />
        <label className="inputLabel ">from</label>
        <input
          className="search-input"
          value={fromDate}
          placeholder="yy-mm-dd"
          onChange={handleFromDate}
        />
        <label className="inputLabel">to</label>
        <input
          className="search-input"
          value={toDate}
          placeholder="yy-mm-dd"
          onChange={handleToDate}
        />
        <label className="inputLabel">language</label>
        <select className="search-input" onChange={handleLang} value={lang}>
          <option value="">Please select</option>
          <option>ar</option>
          <option>de</option>
          <option>en</option>
          <option>es</option>
          <option>fr</option>
          <option>he</option>
          <option>it</option>
          <option>nl</option>
          <option>no</option>
          <option>pt</option>
          <option>ru</option>
          <option>se</option>
          <option>ud</option>
          <option>zh</option>
        </select>
        <label className="inputLabel">Sorted By</label>
        <select className="search-input" value={sort} onChange={handleSort}>
          <option>relevancy</option>
          <option>publishedAt</option>
        </select>
        <br />
        <input className="submit " type="submit" />
      </form>
      <h4>Words you looked for</h4>
      <div className="user-keys">
        {userKeys._id !== undefined &&
          userKeys.searchKey.map((value) => (
            <div>
              {value !== "" && (
                <button
                  className="search-key"
                  onClick={(e) => {
                    handleKeySearch(e);
                  }}
                >
                  {value}
                </button>
              )}
            </div>
          ))}
      </div>
      <div>
        <RenderArticle
          error={error}
          data={data}
          isLoading={isLoading}
          handleDelete={handleDelete}
          validationError={validationError}
          setData={setData}
        />
      </div>
      {renderUserKey && (
        <div>
          <RenderArticle
            error={errorKey}
            data={dataKey}
            isLoading={isLoadingKey}
            handleDelete={handleDeleteUserKey}
            validationError={validationErrorKey}
          />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default GlobalNews;
