import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="nav-style">
      <img
        src="https://image.flaticon.com/icons/png/512/21/21601.png"
        alt="news log"
        className="logo"
      />

      <div className="nav-style-right">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/GlobalNews">
          <li>Global News</li>
        </Link>
        <Link to="/LocalNews">
          <li>Local News</li>
        </Link>
        <Link to="/category">
          <li>Categories</li>
        </Link>
      </div>
    </ul>
  );
};

export default Nav;
