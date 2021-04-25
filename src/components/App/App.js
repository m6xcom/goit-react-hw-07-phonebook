import React, { Component, Suspense, lazy } from "react";
import { Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { routes } from "../../services/routes";
import { getCurrentUser } from "../../redux/user/user-operations";
import PrivateRoute from "../AppBar/PrivateRoute";
import PublicRoute from "../AppBar/PublicRoute";
import AppBar from "../AppBar/AppBar";
import "./App.css";

const RegisterPage = lazy(() => import("../../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const Contacts = lazy(() => import("../../pages/Contacts/Contacts"));

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }
  static propTypes = {
    getCurrentUser: PropTypes.func,
  };
  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={null}>
          <Switch>
            <PublicRoute path={routes.registerPage} component={RegisterPage} />
            <PublicRoute path={routes.loginPage} component={LoginPage} />
            <PrivateRoute path={routes.contactsPage} component={Contacts} />
            <Redirect to={routes.loginPage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
