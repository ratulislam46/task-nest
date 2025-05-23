
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDyvRCk-LuZ5azbMycYD20zgdUx5i5zcEU",
    authDomain: "tasknest-d9c6d.firebaseapp.com",
    projectId: "tasknest-d9c6d",
    storageBucket: "tasknest-d9c6d.firebasestorage.app",
    messagingSenderId: "637769828790",
    appId: "1:637769828790:web:81e7f35ff4dea7d851d917"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);