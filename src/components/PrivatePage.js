import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalContext } from "../context/context";

const PrivatePage = ({ component: Component, ...rest }) => {
  const { check, loading } = useContext(GlobalContext);

  return loading ? (
    <div>loading</div>
  ) : (
    <Route
      {...rest}
      render={() => {
        return check ? <Component {...rest} /> : <Redirect to="/" />;
      }}
    />
  );
};

export default PrivatePage;
