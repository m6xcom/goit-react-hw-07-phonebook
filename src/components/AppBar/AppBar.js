import React from "react";
import Navigation from "./Navigation/Navigation";
import AuthNav from "./AuthNav/AuthNav";
import UserMenu from "./UserMenu/UserMenu";
import style from "./AppBar.module.css";

const AppBar = ({ isAuth }) => {
  return (
    <header className={style.nav}>
      <Navigation />
      {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
