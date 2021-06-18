import React from "react";

const RenderArticle = ({
  data,
  handleDelete,
  isLoading,
  error,
  validationError,
  setData,
}) => {
  const convert = (str) => str.replace("T", " ").replace("Z", " ");
  console.log(data);

  return (
    <div>
      {validationError ? <h2>invalid Input</h2> : false}
      <p>{error}</p>
      {isLoading ? (
        <p style={{ color: "black", fontSize: "50px" }}>loading</p>
      ) : (
        <div>
          {}
          {data.length !== 0 &&
            data.map((article) => {
              return (
                <div className="article" key={article.url}>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(article.url, data, setData)}
                  >
                    X
                  </button>
                  <h3>{article.author}</h3>
                  <h1>{article.title}</h1>
                  <p>{article.source.name}</p>
                  <h5 className="desc">{article.description}</h5>
                  <img
                    className="articleImg"
                    width="40%"
                    src={article.urlToImage}
                    alt={article.description}
                  />
                  <p className="date">{convert(article.publishedAt)}</p>
                  {article.content !== null && (
                    <p>
                      {article.content.slice(0, 100)}...
                      <a rel="noreferrer" target="_blank" href={article.url}>
                        Continue reading
                      </a>
                    </p>
                  )}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};
export default RenderArticle;
