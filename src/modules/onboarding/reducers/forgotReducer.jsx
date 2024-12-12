import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
} from "../actions/forgotPasswordAction";

const initialState = {
  loading: false,
  forgotSuccessMessage: null,
};

export const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return { ...state, loading: true, forgotSuccessMessage: null };
    case FORGOT_PASSWORD_SUCCESS:
      return { ...state, loading: false, forgotSuccessMessage: action.payload };
    case FORGOT_PASSWORD_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};
