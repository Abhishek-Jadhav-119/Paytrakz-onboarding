import axios from "axios";
import { baseUrl } from "./../../../Constants";

export const OTP_VALIDATION_REQUEST = "OTP_VALIDATION_REQUEST";
export const OTP_VALIDATION_SUCCESS = "OTP_VALIDATION_SUCCESS";
export const OTP_VALIDATION_FAILURE = "OTP_VALIDATION_FAILURE";

export const validateOtpOnMobile =
  (phoneNo, otp, countryCode) => async (dispatch) => {
    try {
      dispatch({ type: OTP_VALIDATION_REQUEST });

      const response = await axios.post(
        `${baseUrl}/users/validateOtpOnMobile`,
        { phoneNo, otp, countryCode },
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Accept: "application/json",
          },
        }
      );

      const { message, status } = response.data;

      if (status == 200) {
        dispatch({
          type: OTP_VALIDATION_SUCCESS,
          payload: response.data,
        });
      }

      console.log("Password Verification Status: ", status);
      alert(message);
    } catch (error) {
      dispatch({
        type: OTP_VALIDATION_FAILURE,
        payload: error.response?.data?.error || "Server error",
      });
    }
  };
