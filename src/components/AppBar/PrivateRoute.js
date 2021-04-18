import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { isAuth } from "../../redux/user/user-selectors";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: isAuth(state),
});

export default connect(mapStateToProps)(PrivateRoute);

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
};
