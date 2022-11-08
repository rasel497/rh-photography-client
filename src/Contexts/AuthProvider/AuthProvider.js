import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // createUserWithEmailAndPassword:
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //logOut
    const logOut = () => {
        return signOut(auth);
    }

    // signInWithEmailAndPassword:
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    // using for Create User AND Sign In user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }

    }, []);

    // -------------------social loign user---------------//

    const googleSignIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }




    // // signInWithPopupGoogle
    // const providerLoginGoogle = (provider) => {
    //     setLoading(true);
    //     return signInWithPopup(auth, provider);
    // }

    // // signInWithPopupFacebook
    // const providerLoginFacebook = (provider) => {
    //     setLoading(true);
    //     return signInWithPopup(auth, provider);
    // }
    // // signInWithPopupGitHub
    // const providerLoginGithub = (provider) => {
    //     setLoading(true);
    //     return signInWithPopup(auth, provider);
    // }

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleSignIn,
        logOut,


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;