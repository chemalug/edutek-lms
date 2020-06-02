import { auth } from "functions/firebase";

export const createUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const signInWithEmailAndPassword = (userData) =>
  auth.signInWithEmailAndPassword(userData.email, userData.password);

export const doSignOut = () => auth.signOut();

//password reset
export const doPasswordReset = (email) => auth.sendPasswordResetEmail(email);

//password change
export const doPasswordChange = (password) =>
  auth.currentUser.updatePassword(password);

export const authObj = auth;
export const onAuthStateChanged = (user) => auth.onAuthStateChanged(user);
