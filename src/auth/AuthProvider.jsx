"use client"; // ✅ হুক ব্যবহার করার জন্য client

import { useEffect, useState } from "react";

import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "@/firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);
  const SignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const handlesignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const userInfo = {
    SignUp,
    SignIn,
    googleSignIn,
    handlesignOut,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

// name: user?.displayName || 'mahdi',
// user,
// createUser: (email, password) => createUserWithEmailAndPassword(auth, email, password),
// loginUser: (email, password) => signInWithEmailAndPassword(auth, email, password),
// googleLogin: () => signInWithPopup(auth, googleProvider),
// signOutUser: () => signOut(auth),
// updateUser: (updateData) => updateProfile(auth.currentUser, updateData)
