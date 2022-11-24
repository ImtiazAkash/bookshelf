import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import "../Firebase"
import React, { useContext, useEffect, useState } from "react";
import { getDatabase, ref, set } from "firebase/database";



 // Get a database reference to our blog
  const db = getDatabase();
  //const Ref = ref(db, "userdata");

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  //signup function
  async function signup(email, password, username, fullname) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;

    //update profile
    await updateProfile(user, {
      displayName: username,
    });

    const uid = user.uid;
    //save data to database

    set(ref(db, "userData/users/" + uid), {
      user_name: username,
      full_name: fullname,
    });

    
    setCurrentUser({
      ...user,
    });
  }

  //login function
  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  //logout function
  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }

  //saving data to database

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
