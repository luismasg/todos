import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export default props => {
  console.log(props);

  return (
    <header className="header-component">
      <h1>TodoList</h1>
      <nav>
        <Link
          to="/home"
          style={{
            color: props.location.pathname === "/home" ? "red" : "white"
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{
            color: props.location.pathname === "/about" ? "red" : "white"
          }}
        >
          About
        </Link>
        <Link
          to="/search"
          style={{
            color: props.location.pathname === "/search" ? "red" : "white"
          }}
        >
          Search
        </Link>
      </nav>
    </header>
  );
};
