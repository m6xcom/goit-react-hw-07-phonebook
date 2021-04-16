import React from "react";
import { connect } from "react-redux";
import shortid from "shortid";
import PropTypes from "prop-types";
import { addContact } from "../../redux/contacts/contacts-operations";
import { getContacts } from "../../redux/contacts/contacts-selectors";
import style from "./ContactForm.module.css";

const ContactForm = ({ contacts, addContact }) => {
  const nameInput = shortid.generate();
  const numberInput = shortid.generate();
  return (
    <form
      className={style.form}
      onSubmit={(e) => {
        e.preventDefault();
        if (
          contacts.every(
            (el) =>
              el.name.toLowerCase() !==
              e.target.children.name.value.toLowerCase()
          )
        ) {
          addContact({
            id: shortid.generate(),
            name: e.target.children.name.value,
            number: e.target.children.number.value,
          });
        } else {
          alert(`${e.target.children.name.value} is already in contacts.`);
        }
        e.target.reset();
      }}
    >
      <label htmlFor={nameInput}>Name</label>
      <input id={nameInput} name="name" type="text"></input>
      <label htmlFor={numberInput}>Number</label>
      <input id={numberInput} name="number" type="tel"></input>
      <button className={style.addContactBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

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
