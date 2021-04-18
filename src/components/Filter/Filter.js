import React from "react";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import shortid from "shortid";
import PropTypes from "prop-types";
import { FILTERCHANGE } from "../../redux/contacts/contacts-actions";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Filter.module.css";

const Filter = ({ filterChange }) => {
  const filterInput = shortid.generate();
  return (
    <Form.Group>
      <Form.Label className={style.title}>Find contacts by name</Form.Label>
      <Form.Control
        id={filterInput}
        type="text"
        onChange={(e) => {
          filterChange(e.target.value.toLowerCase());
        }}
        name="filter"
      ></Form.Control>
    </Form.Group>
  );
};

const mapDispatchToProps = (dispatch) => ({
  filterChange: (text) => dispatch(FILTERCHANGE(text)),
});

export default connect(null, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filterChange: PropTypes.func,
};
