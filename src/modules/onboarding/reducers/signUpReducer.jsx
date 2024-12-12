import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../actions/signUpAction";

const initialState = {
  isSuccessSignUp: false,
  userData: null,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        userData: action.payload,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        userData: null,
      };
    default:
      return state;
  }
};
export default signUpReducer;
