import axios from "axios";
import {
  REGISTERUSERREQUEST,
  REGISTERUSERSUCCESS,
  REGISTERUSERERROR,
  LOGINUSERREQUEST,
  LOGINUSERSUCCESS,
  LOGINUSERERROR,
  LOGOUTUSERREQUEST,
  LOGOUTUSERSUCCESS,
  LOGOUTUSERERROR,
  GETCURUSERREQUEST,
  GETCURUSERSUCCESS,
  GETCURUSERERROR,
} from "./user-actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registerUser = (user) => async (dispatch) => {
  dispatch(REGISTERUSERREQUEST());
  try {
    const response = await axios.post("/users/signup", user);
    token.set(response.data.token);
    dispatch(REGISTERUSERSUCCESS(response.data));
  } catch (error) {
    dispatch(REGISTERUSERERROR(error.message));
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch(LOGINUSERREQUEST);
  try {
    const response = await axios.post("/users/login", user);
    token.set(response.data.token);
    dispatch(LOGINUSERSUCCESS(response.data));
  } catch (error) {
    dispatch(LOGINUSERERROR(error.message));
  }
};

export const logoutUser = () => async (dispatch) => {
  dispatch(LOGOUTUSERREQUEST);
  try {
    await axios.post("/users/logout");
    token.unset();
    dispatch(LOGOUTUSERSUCCESS());
  } catch (error) {
    dispatch(LOGOUTUSERERROR(error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(GETCURUSERREQUEST);
  try {
    const response = await axios.get("/users/current");

    dispatch(GETCURUSERSUCCESS(response.data));
  } catch (error) {
    dispatch(GETCURUSERERROR(error.message));
  }
};
