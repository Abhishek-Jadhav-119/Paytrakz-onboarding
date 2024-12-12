import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from "./actionType";
import axios from "axios";
import { baseUrl } from "./../../../Constants";

export const resetPasswordAction = (payload) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });

    const response = await axios.post(
      `${baseUrl}/users/resetPassword`,
      payload,
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Accept: "application/json",
        },
      }
    );

    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAILURE,
      payload: error.response ? error.response.data : error.message,
    });
  }
};
