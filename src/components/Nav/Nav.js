import React from "react";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className={style.navBar}>
      <h1 className={style.title}>Hotel Management</h1>
      <div className={style.navItems}>
        <Link to="/">Home</Link>
        <Link to="/customer">Customer</Link>
        <Link to="/gallery">Gallery</Link>
      </div>
    </nav>
  );
};

export default Nav;
