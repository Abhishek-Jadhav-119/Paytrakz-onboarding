import { baseUrl } from "../../../Constants";
import axios from "axios";

export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAILURE = "SIGNIN_FAILURE";
// export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS";
// export const FETCH_PROJECTS_FAILURE = "FETCH_PROJECTS_FAILURE";

export const userSignIn =
  (countryCode, phoneNo, userPassword) => async (dispatch) => {
    try {
      const response = await axios.post(
        `${baseUrl}/users/signin`,
        {
          countryCode,
          phoneNo,
          userPassword,
        },

        {
          headers: { "Content-Type": "application/json; charset=UTF-8" },
        }
      );

      const { token, message, status } = response.data;

      if (status == 200) {
        dispatch({
          type: SIGNIN_SUCCESS,
          payload: response.data,
        });
      }
      console.log("Status Code: ", status);
      alert(message);

      //Fetch user projects after successful sign-in
      // dispatch(fetchUserProjects(token));
    } catch (error) {
      const { message, status } = error.response.data;
      dispatch({
        type: SIGNIN_FAILURE,
        payload:
          error.response?.data?.message || "Sign In failed Auth Action !",
      });

      console.log("Status Code: ", status);
      alert("Sign In Failed(Catch error)...!", message);
    }
  };

// export const fetchUserProjects = (token) => async (dispatch) => {
//   try {
//     const response = await axios.get(`${baseUrl}/projects/getMyAllProjects`, {
//       headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     dispatch({
//       type: FETCH_PROJECTS_SUCCESS,
//       payload: response.data.listOfProjects || [],
//     });
//   } catch (error) {
//     dispatch({
//       type: FETCH_PROJECTS_FAILURE,
//       payload: error.response?.data?.message || "Failed to fetch projects",
//     });
//   }
// };
