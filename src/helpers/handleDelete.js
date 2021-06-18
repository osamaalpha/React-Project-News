const handleDelete = (url, data, setData) => {
  const newData = data.filter((article) => article.url !== url);
  setData(newData);
};

export default handleDelete;
