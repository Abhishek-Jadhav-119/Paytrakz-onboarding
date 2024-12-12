import axios from "axios";
import { baseUrl } from "./../../../Constants";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAIL = "FORGOT_PASSWORD_FAIL";

export const sendForgotPasswordOTP = (verification) => async (dispatch) => {
  dispatch({ type: FORGOT_PASSWORD_REQUEST });

  try {
    const response = await axios.post(
      `${baseUrl}/users/sendOtpOnMobile`,
      {
        checkValidUser: verification.checkValidUser,
        countryCode: verification.countryCode,
        phoneNo: verification.phoneNo,
      },
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }
    );

    const { message, status } = response.data;
    if (status == 200) {
      dispatch({
        type: FORGOT_PASSWORD_SUCCESS,
        payload: response.data,
      });
    }

    console.log("Forget Password Status: ", status);
    alert(message);
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload:
        error.response?.data?.message ||
        "Something went wrong on OTP generation",
    });
  }
};
