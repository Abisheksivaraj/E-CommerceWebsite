import axios from "axios";
import { API_URL } from "../../config/apiConfig";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionType";

const token = localStorage.getItem("jwt");

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (formData) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const response = await axios.post(`${API_URL}/signUp`, formData);
    const user = response.data;

    if (user) {
      localStorage.setItem("jwt", JSON.stringify(user)); // Save JWT token
    }
    console.log("user", user);

    dispatch(registerSuccess(user)); // Pass full user object
  } catch (error) {
    dispatch(registerFailure(error.response?.data?.message || error.message)); // Use backend error if available
  }
};

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });

const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (formData) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await axios.post(`${API_URL}/signIn`, formData);
    const user = response.data;

    if (user) {
      localStorage.setItem("jwt", JSON.stringify(user));
    }
    console.log("user", user);

    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.response?.data?.message || error.message));
  }
};

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });

const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = () => async (dispatch) => {
  dispatch(getUserRequest());

  try {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = response.data;
    console.log("user", user);

    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailure(error.message));
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT, payload: null });
  localStorage.clear();
};
