import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { Children, createContext, useEffect, useState } from 'react';
import { auth } from '../../Firebase/Firebase.config';



export const AuthContext = createContext()

const AuthProver = ({ children }) => {

    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState(null)


    const Register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const LogOut = () => {
        return signOut(auth)
    }


    const CreateWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }



    const AuthData = {
        Register,
        Login,
        setUser,
        user,
        LogOut,
        CreateWithGoogle
    }
    return (
        <div>
            <AuthContext value={AuthData}> {children} </AuthContext>
        </div>
    );
};

export default AuthProver;