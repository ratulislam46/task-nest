import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { Children, createContext } from 'react';
import { auth } from '../../Firebase/Firebase.config';



export const AuthContext = createContext()

const AuthProver = ({ children }) => {

    const Register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const AuthData = {
        Register,
        Login
    }
    return (
        <div>
            <AuthContext value={AuthData}> {children} </AuthContext>
        </div>
    );
};

export default AuthProver;