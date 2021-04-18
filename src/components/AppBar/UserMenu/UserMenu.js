import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEmail } from "../../../redux/user/user-selectors";
import { logoutUser } from "../../../redux/user/user-operations";
import style from "./UserMenu.module.css";

const UserMenu = ({ email, onLogout }) => {
  return (
    <div className={style.userMenu}>
      <div className={style.user}>
        <h1>{email}</h1>
        <button onClick={onLogout}>LogOut</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  email: getEmail(state),
});

const mapDispatchToProps = {
  onLogout: logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

UserMenu.propTypes = {
  email: PropTypes.string,
  onLogout: PropTypes.func,
};
