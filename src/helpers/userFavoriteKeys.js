const userFavoriteKeys = async (searchKey, userID) => {
  const newUser = {
    searchKey,
  };
  console.log(userID);
  if (searchKey !== "" || searchKey !== " ") {
    const res = await fetch(`http://localhost:5000/users/add/` + userID, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await res.json();

    return data;
  }
};

export default userFavoriteKeys;
