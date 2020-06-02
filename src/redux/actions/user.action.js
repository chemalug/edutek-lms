import { db } from "functions/firebase";

export const fetchAllUsers = () => (dispatch) => {
  db.ref("users").on("value", (snapShot) => {
    return snapShot.val();
  });
};
