import { db } from "functions/firebase";

export const createUser = (dataUser) =>
  db.ref(`users/${dataUser.id}`).set(dataUser);
