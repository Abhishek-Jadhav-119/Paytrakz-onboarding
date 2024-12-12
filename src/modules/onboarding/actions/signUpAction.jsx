import { baseUrl } from "../../../Constants";
import axios from "axios";

export const SIGNUP_SUCCESS = "SUGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const signUpUser =
  (
    firstName,
    lastName,
    email,
    countryCode,
    phoneNo,
    userPassword,
    gender,
    navigate
  ) =>
  async (dispatch) => {
    // Validate inputs
    if (
      !firstName ||
      !lastName ||
      !email ||
      !countryCode ||
      !phoneNo ||
      !userPassword ||
      !gender
    ) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: "All fields are required.",
      });
      return;
    }

    try {
      const response = await axios.post(
        `${baseUrl}/users/signup`,
        {
          firstName,
          lastName,
          email,
          countryCode,
          phoneNo,
          userPassword,
          gender,
        },
        {
          headers: { "Content-Type": "application/json; charset=UTF-8" },
          Accept: "application/json",
        }
      );

      const { message, status } = response.data;

      if (status == 200) {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: response.data,
        });
        console.log("Sign Up Status: ", status);
        alert(message);
      }
      console.log("Status code of Sign Up: ", status);
      alert(message);
    } catch (error) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: error.response?.data?.message || "Sign Up Failed...!",
      });
    }
  };
