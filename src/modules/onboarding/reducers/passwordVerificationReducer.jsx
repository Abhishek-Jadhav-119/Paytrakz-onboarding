import {
  OTP_VALIDATION_REQUEST,
  OTP_VALIDATION_SUCCESS,
  OTP_VALIDATION_FAILURE,
} from "./../actions/passwordVerificationAction";

const initialState = {
  loading: false,
  errorMessage: null,
  validOtpSuccessMessage: null, // Assuming the response contains a success message
};

export const otpValidationReducer = (state = initialState, action) => {
  switch (action.type) {
    case OTP_VALIDATION_REQUEST:
      return { ...state, loading: true };
    case OTP_VALIDATION_SUCCESS:
      return {
        ...state,
        loading: false,
        validOtpSuccessMessage: action.payload,
      };
    case OTP_VALIDATION_FAILURE:
      return { ...state, loading: false, errorMessage: action.payload };
    default:
      return state;
  }
};

// export default otpValidationReducer;
