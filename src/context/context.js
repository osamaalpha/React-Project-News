import React, { createContext, useState } from "react";

import { handleSubmit } from "../helpers/handleSubmit";

export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userID, setUserID] = useState("");
  return (
    <GlobalContext.Provider
      value={{
        handleSubmit,
        setCheck,
        check,
        loading,
        setLoading,
        userID,
        setUserID,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
