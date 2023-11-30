import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateDisplayName = (newDisplayName) => {
    setLoading(true);

    const currentUser = auth.currentUser;

    return updateProfile(currentUser, { displayName: newDisplayName })
      .then(() => {
        setUser({ ...user, displayName: newDisplayName });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error updating displayName:", error);
        setLoading(false);
      });
  };

  const updateProfileImage = (newPhotoURL) => {
    setLoading(true);

    const currentUser = auth.currentUser;

    return updateProfile(currentUser, { photoURL: newPhotoURL })
      .then(() => {
        setUser({ ...user, photoURL: newPhotoURL });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error updating Photo:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    signInWithGoogle,
    createUser,
    signInUser,
    logOut,
    updateDisplayName,
    updateProfileImage,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
