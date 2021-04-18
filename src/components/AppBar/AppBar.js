import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AuthNav from "./AuthNav/AuthNav";
import UserMenu from "./UserMenu/UserMenu";
import { isAuth } from "../../redux/user/user-selectors";
import style from "./AppBar.module.css";

const AppBar = ({ isAuth }) => {
  return (
    <header className={style.nav}>{isAuth ? <UserMenu /> : <AuthNav />}</header>
  );
};

const mapStateToProps = (state) => ({
  isAuth: isAuth(state),
});

export default connect(mapStateToProps)(AppBar);

AppBar.propTypes = {
  isAuth: PropTypes.bool,
};
