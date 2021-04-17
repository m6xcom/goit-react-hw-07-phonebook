import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { isAuth } from "../../redux/user/user-selectors";
import routes from "../../services/routes";
import { getCurrentUser } from "../../redux/user/user-operations";
import AppBar from "../AppBar/AppBar";
import HomePage from "../pages/HomePage/HomePage";
import Contacts from "../pages/Contacts/Contacts";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }
  render() {
    return (
      <>
        <AppBar isAuth={this.props.isAuth} />
        <Switch>
          <Route path={routes.homePage} exact component={HomePage} />
          <Route path={routes.contactsPage} component={Contacts} />
          <Route path={routes.registerPage} component={RegisterPage} />
          <Route path={routes.loginPage} component={LoginPage} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: isAuth(state),
});

const mapDispatchToProps = {
  getCurrentUser: getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
