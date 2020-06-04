import { auth } from "functions/firebase";
import * as actionTypes from "redux/actions/actionTypes";

export const loginFirebase = (email, password) => (dispatch) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      /*if (!user.user.emailVerified) {
        dispatch({
          type: actionTypes.GET_ERRORS,
          payload: {
            message: "Email no verificado, revisa tu buzón de correo",
          },
        });
      } else {*/
      //localStorage.setItem("user", JSON.stringify(user.user));
      dispatch(setCurrentUser(user.user));
      /*}*/
    })
    .catch((err) =>
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: { message: err.message },
      })
    );
};
// Set logged in user
export const setCurrentUser = (user) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: user,
  };
};

export const logoutUser = () => (dispatch) => {
  auth.signOut();
  return dispatch({ type: actionTypes.LOGOUT });
};
