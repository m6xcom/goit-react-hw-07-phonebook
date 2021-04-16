import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  fetchContacts,
  deleteContact,
} from "../../redux/contacts/contacts-operations";
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors";
import style from "./ContactsList.module.css";

class ContactsList extends Component {
  componentDidMount = () => {
    const { fetchContacts } = this.props;
    fetchContacts();
  };
  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <ul>
        {contacts.map((el) => {
          return (
            <li className={style.contactsListItem} key={el.id}>
              <p>
                {el.name} : {el.number}
              </p>
              <button onClick={() => deleteContact(el.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: getFilteredContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (contactId) => dispatch(deleteContact(contactId)),
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  deleteContact: PropTypes.func,
  fetchContact: PropTypes.func,
};
