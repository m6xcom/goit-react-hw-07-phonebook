import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { isAuth } from "../../redux/user/user-selectors";

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? <Redirect to="/contacts" /> : <Component {...props} />
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: isAuth(state),
});

export default connect(mapStateToProps)(PublicRoute);

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
};
