export const handleSubmit = (
  e,
  setData,
  handleFetch,
  setIsLoading,
  userFavoriteKeys,
  searchKey,
  userID
) => {
  e.preventDefault();
  setIsLoading(true);
  setData([]);
  handleFetch();
  userFavoriteKeys(searchKey, userID);
};
