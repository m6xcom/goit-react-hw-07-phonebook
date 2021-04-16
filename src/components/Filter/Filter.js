import React from "react";
import { connect } from "react-redux";
import shortid from "shortid";
import PropTypes from "prop-types";
import { FILTERCHANGE } from "../../redux/contacts/contacts-actions";
import style from "./Filter.module.css";

const Filter = ({ filterChange }) => {
  const filterInput = shortid.generate();
  return (
    <>
      <label className={style.title} htmlFor={filterInput}>
        Find contacts by name
      </label>
      <input
        id={filterInput}
        type="text"
        onChange={(e) => {
          filterChange(e.target.value.toLowerCase());
        }}
        name="filter"
      ></input>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  filterChange: (text) => dispatch(FILTERCHANGE(text)),
});

export default connect(null, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filterChange: PropTypes.func,
};
