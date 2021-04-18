import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";
import { loginUser } from "../../../redux/user/user-operations";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./LoginPage.module.css";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.onLogin(this.state);
          this.setState({ email: "", password: "" });
          e.target.reset();
        }}
        className={style.form}
      >
        <Form.Group className={style.inputGroup} controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            name="email"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className={style.inputGroup} controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button className={style.inputGroup} variant="primary" type="submit">
          LogIn
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = {
  onLogin: loginUser,
};

export default connect(null, mapDispatchToProps)(LoginPage);

LoginPage.propTypes = {
  onLogin: PropTypes.func,
};
