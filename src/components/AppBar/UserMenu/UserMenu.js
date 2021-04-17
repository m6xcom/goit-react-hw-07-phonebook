import React from "react";
import { connect } from "react-redux";
import { getUserName } from "../../../redux/user/user-selectors";
import { logoutUser } from "../../../redux/user/user-operations";
import style from "./UserMenu.module.css";

const UserMenu = ({ username, onLogout }) => {
  return (
    <div className={style.userMenu}>
      <h1>Welcome {username}</h1>
      <button onClick={onLogout}>LogOut</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  username: getUserName(state),
});

const mapDispatchToProps = {
  onLogout: logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
