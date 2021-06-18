import { useEffect } from "react";

const useAllUserKeys = (userID, setUserKeys) => {
  useEffect(() => {
    async function fetchUserKeys() {
      const res = await fetch(
        `https://osamanews.herokuapp.com/users/` + userID,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await res.json();

      setUserKeys(data);
    }
    fetchUserKeys();
  }, []);
};

export default useAllUserKeys;
