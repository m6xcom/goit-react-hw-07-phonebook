import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import {
  fetchContacts,
  deleteContact,
} from "../../redux/contacts/contacts-operations";
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./ContactsList.module.css";

class ContactsList extends Component {
  componentDidMount = () => {
    const { fetchContacts } = this.props;
    fetchContacts();
  };
  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <ListGroup className={style.contactsList}>
        {contacts.map((el) => {
          return (
            <ListGroup.Item className={style.contactsListItem} key={el.id}>
              <p>
                {el.name} : {el.number}
              </p>
              <Button variant="primary" onClick={() => deleteContact(el.id)}>
                Delete
              </Button>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
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
