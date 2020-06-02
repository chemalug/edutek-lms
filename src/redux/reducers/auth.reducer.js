import * as actionTypes from "redux/actions/actionTypes";

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
