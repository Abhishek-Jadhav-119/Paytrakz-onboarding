import { combineReducers } from "redux";
import signInReducers from "../modules/onboarding/reducers/signInReducers";
import signUpReducer from "./../modules/onboarding/reducers/signUpReducer";
import { forgotPasswordReducer } from "../modules/onboarding/reducers/forgotReducer";
import { otpValidationReducer } from "../modules/onboarding/reducers/passwordVerificationReducer";

export const reducers = combineReducers({
  signInReducers: signInReducers,
  signUpReducers: signUpReducer,
  forgotPassword: forgotPasswordReducer,
  otpValidationReducer: otpValidationReducer,
});
