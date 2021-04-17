import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { registerUser } from "../../../redux/user/user-operations";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./RegisterPage.module.css";

class RegisterPage extends Component {
  state = {
    name: "",
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
          this.props.onRegister(this.state);
          this.setState({ name: "", email: "", password: "" });
          e.target.reset();
        }}
        className={style.form}
      >
        <Form.Group className={style.inputGroup} controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            type="name"
            name="name"
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group className={style.inputGroup} controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className={style.inputGroup} controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button className={style.inputGroup} variant="primary" type="submit">
          Register
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = {
  onRegister: registerUser,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
