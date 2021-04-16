import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../services/routes";
import PropTypes from "prop-types";
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={style.navList}>
      <li className={style.navListItem}>
        <NavLink
          className={style.navLink}
          activeClassName={style.activeNavLink}
          exact
          to={routes.homePage}
        >
          Home
        </NavLink>
      </li>
      <li className={style.navListItem}>
        <NavLink
          className={style.navLink}
          activeClassName={style.activeNavLink}
          exact
          to={routes.contactsPage}
        >
          Contacts
        </NavLink>
      </li>
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
    </nav>
  );
};

export default Navigation;
