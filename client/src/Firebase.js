import { useState, useEffect, useContext, createContext } from "react";
import { Link } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, 
         GoogleAuthProvider, 
         signInWithPopup, 
         onAuthStateChanged,
         signOut } from 'firebase/auth'

const firebaseConfig = {
  apiKey:"AIzaSyBqAEjvyofMAlFyQUd_GLj5mqSp_f2RuhA",
  authDomain: "uh-chat-933d4.firebaseapp.com",
  projectId: "uh-chat-933d4",
  storageBucket: "uh-chat-933d4.appspot.com",
  messagingSenderId: "661300865364",
  appId: "1:661300865364:web:b652853bf6f0633d5240c1",
  measurementId: "G-Y462YBNJV2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Google Authorization
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// We can use this everywhere in our react app without the need of props
export const AuthContext = createContext()
export const AuthContextProvider = props => {
    const [user, setUser] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
        return () => unsubscribe()
    }, [])
    return <AuthContext.Provider value={{ user, error }} {...props} />
}
export const useAuthState = () => {
    const auth = useContext(AuthContext)
    return { ...auth, isAuthenticated: auth.user != null }
}

export const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePicture = result.user.photoURL;
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePicture", profilePicture);
    })
    .catch((error) => {
        console.log(error);
    })
};
export const signOutWithGoogle = async () => {
    await signOut(auth);
    console.log("Signed out");
};
