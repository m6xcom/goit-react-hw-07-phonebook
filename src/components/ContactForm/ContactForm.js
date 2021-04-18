import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import shortid from "shortid";
import PropTypes from "prop-types";
import { addContact } from "../../redux/contacts/contacts-operations";
import { getContacts } from "../../redux/contacts/contacts-selectors";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Form
        className={style.form}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(this.state);
          if (
            this.props.contacts.every(
              (el) => el.name.toLowerCase() !== this.state.name.toLowerCase()
            )
          ) {
            this.props.addContact({
              id: shortid.generate(),
              name: this.state.name,
              number: this.state.number,
            });
          } else {
            alert(`${this.state.name} is already in contacts.`);
          }
          e.target.reset();
        }}
      >
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            name="name"
            type="name"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            name="number"
            type="tel"
            placeholder="Phone number"
          />
        </Form.Group>
        <Button className={style.addContactBtn} variant="primary" type="submit">
          Add contact
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  addContact: (contact) => dispatch(addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  addContact: PropTypes.func,
};
