import { SIGNIN_SUCCESS, SIGNIN_FAILURE } from "../actions/signInActions";

const initialState = {
  isSuccessLogin: false,
  user: null,
  loginError: null,
};

const signInReducers = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isSuccessLogin: true,
        user: action.payload,
        loginError: null,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        isSuccessLogin: false,
        user: null,
        loginError: action.payload,
      };
    default:
      return state;
  }
};
export default signInReducers;
