import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"

const app = initializeApp({
    apiKey: "AIzaSyB5YhYQ0rErYXATL0S44l_Wy7NKa_68hZo",
    authDomain: "auth-fitnexy.firebaseapp.com",
    projectId: "auth-fitnexy",
    storageBucket: "auth-fitnexy.appspot.com",
    messagingSenderId: "305974622340",
    appId: "1:305974622340:web:59ba56ef0442f1bf2d6ad1"
})

export const auth = getAuth(app);
export default app;