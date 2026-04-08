import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    // Update User's Profile
    const updateUserProfile = (displayName, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName,
            photoURL,
        });
    }
    
    // Email verification
    const userEmailVerification = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser);
    }

    // Sign In User
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign In with Google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Sign In with Github
    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // Forgot password
    const forgotPasswordUser = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    // SignOut User
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Observer for mount, update and unmount user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // console.log(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signInUser,
        updateUserProfile,
        userEmailVerification,
        signOutUser,
        forgotPasswordUser,
        signInWithGoogle,
        signInWithGithub
    }

    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;
// https://i.ibb.co.com/pjLTvVcs/demo-user.png