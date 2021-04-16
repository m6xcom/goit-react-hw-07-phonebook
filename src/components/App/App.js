import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../../services/routes";
import Navigation from "../Navigation/Navigation";
import HomePage from "../pages/HomePage/HomePage";
import Contacts from "../pages/Contacts/Contacts";
import "./App.css";

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path={routes.homePage} exact component={HomePage} />
        <Route path={routes.contactsPage} component={Contacts} />
      </Switch>
    </>
  );
};

export default App;
