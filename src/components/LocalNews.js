import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/context";
import RenderArticle from "./renderArticle";
import handleDelete from "../helpers/handleDelete";
import Footer from "./Footer";
import { useFetchApi, API_KEY } from "../helpers/usefetchApi";
const LocalNews = () => {
  const { handleSubmit, userID } = useContext(GlobalContext);
  const [searchKey, setSearchKey] = useState("");
  const [country, setCountry] = useState("");
  const handleSearchKey = (e) => {
    setSearchKey(e.target.value);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  const userFavoriteKeys = async () => {
    const newUser = {
      searchKey,
    };

    const res = await fetch(`http://localhost:5000/users/add/` + userID, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await res.json();

    return data;
  };
  const [
    handleFetch,
    data,
    setData,
    isLoading,
    error,
    setIsLoading,
    validationError,
  ] = useFetchApi(
    `https://newsapi.org/v2/top-headlines?${
      country === "" || country === " " ? "" : "country=" + country
    }${
      searchKey === "" || searchKey === " " ? "" : "&q=" + searchKey
    }&apiKey=${API_KEY}`
  );

  return (
    <div>
      <form
        className="search-form"
        onSubmit={(e) =>
          handleSubmit(e, setData, handleFetch, setIsLoading, userFavoriteKeys)
        }
      >
        <label className="inputLabel">Country *</label>
        <select value={country} onChange={handleCountry} required>
          <option value="">Please select</option>
          <option>ae</option>
          <option>ar</option>
          <option>at</option>
          <option>au</option>
          <option>be</option>
          <option>bg</option>
          <option>br</option>
          <option>ca</option>
          <option>ch</option>
          <option>cn</option>
          <option>co</option>
          <option>cu</option>
          <option>cz</option>
          <option>de</option>
          <option>eg</option>
          <option>fr</option>
          <option>gb</option>
          <option>gr</option>
          <option>hk</option>
          <option>hu</option>
          <option>id</option>
          <option>ie</option>
          <option>il</option>
          <option>in</option>
          <option>it</option>
          <option>jp</option>
          <option>kr</option>
          <option>lt</option>
          <option>lv</option>
          <option>ma</option>
          <option>mx</option>
          <option>my</option>
          <option>ng</option>
          <option>nl</option>
          <option>no</option>
          <option>nz</option>
          <option>ph</option>
          <option>pl</option>
          <option>pt</option>
          <option>ro</option>
          <option>rs</option>
          <option>ru</option>
          <option>sa</option>
          <option>se</option>
          <option>sg</option>
          <option>si</option>
          <option>sk</option>
          <option>th</option>
          <option>tr</option>
          <option>tw</option>
          <option>ua</option>
          <option>us</option>
          <option>ve</option>
          <option>za</option>
        </select>

        <label className="inputLabel">Search Key</label>
        <input
          value={searchKey}
          placeholder="Search Key"
          onChange={handleSearchKey}
        />
        <br />
        <input className="submit" type="submit" />
        <RenderArticle
          error={error}
          data={data}
          isLoading={isLoading}
          handleDelete={handleDelete}
          validationError={validationError}
          setData={setData}
        />
      </form>
      <Footer />
    </div>
  );
};

export default LocalNews;
