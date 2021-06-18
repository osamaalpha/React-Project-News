const userFavoriteKeys = async (searchKey, userID) => {
  const newUser = {
    searchKey,
  };

  if (searchKey !== "" || searchKey !== " ") {
    const res = await fetch(
      `https://osamanews.herokuapp.com/users/add/` + userID,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      }
    );
    const data = await res.json();

    return data;
  }
};

export default userFavoriteKeys;
