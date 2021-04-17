import axios from "axios";
import {
  ADDCONTACTREQUEST,
  ADDCONTACTSUCCESS,
  ADDCONTACTERROR,
  FETCHCONTACTREQUEST,
  FETCHCONTACTERROR,
  FETCHCONTACTSUCCESS,
  DELETECONTACTREQUEST,
  DELETECONTACTSUCCESS,
  DELETECONTACTERROR,
} from "./contacts-actions";

export const fetchContacts = () => async (dispatch) => {
  dispatch(FETCHCONTACTREQUEST());
  try {
    const response = await axios.get("/contacts");
    const data = await response.data;

    dispatch(FETCHCONTACTSUCCESS(data));
  } catch (error) {
    dispatch(FETCHCONTACTERROR(error));
  }
};

export const addContact = (contact) => async (dispatch) => {
  dispatch(ADDCONTACTREQUEST());
  try {
    const response = await axios.post("/contacts", contact);
    const data = await response.data;

    dispatch(ADDCONTACTSUCCESS(data));
  } catch (error) {
    dispatch(ADDCONTACTERROR(error));
  }
};

export const deleteContact = (id) => async (dispatch) => {
  dispatch(DELETECONTACTREQUEST());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(DELETECONTACTSUCCESS(id));
  } catch (error) {
    dispatch(DELETECONTACTERROR(error));
  }
};
