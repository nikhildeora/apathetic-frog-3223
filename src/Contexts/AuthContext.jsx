import React from "react";
import {auth} from "../firebase"
import {createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signOut,sendEmailVerification,updateProfile,sendPasswordResetEmail} from "firebase/auth"
import { useToast } from '@chakra-ui/react'

export const AuthContext = React.createContext()

export default function AuthContextProvider({children}){
 const [currentUser , setCurrentUser] = React.useState({});
 const toast = useToast()

function Signup(email,password){

    return createUserWithEmailAndPassword(auth,email,password)
    // .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });
}


function updateprofilename(name){
    // console.log("name",name);
    return updateProfile(auth.currentUser,{displayName : name})
}

function sendpassreset(email){
   sendPasswordResetEmail(auth,email)
   .then(()=>{
    toast({
          
        description: "Password reset request sent to your Email id",
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
   })
   .catch((err)=>console.log(err))
}

function Login(email,password){
  return signInWithEmailAndPassword(auth,email,password)
}

function emailverify(){
    sendEmailVerification(auth.currentUser)
    .then(()=>{
        toast({
          
            description: "Verify your Email Id , email set to your ID",
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
    })
    .catch((err)=>{
        const errrrr = err;
    })
}

function Logout(){
   signOut(auth)
}

// Signup("nikhilDeora","my@gmail.com","123456")
// console.log("currr",currentUser);
// console.log("currrtok",currentUser.email);


React.useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth,user => {
        setCurrentUser(user)
    })

    return unsubscribe;
},[])

    const value = {
     currentUser,
     Signup,
     Login,
     Logout,
     updateprofilename,
     sendpassreset,
     emailverify
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}