import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../../services/routes";
import style from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <ul className={style.navList}>
      <li className={style.navListItem}>
        <NavLink
          className={style.navLink}
          activeClassName={style.activeNavLink}
          exact
          to={routes.registerPage}
        >
          Register
        </NavLink>
      </li>
      <li className={style.navListItem}>
        <NavLink
          className={style.navLink}
          activeClassName={style.activeNavLink}
          exact
          to={routes.loginPage}
        >
          LogIn
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
