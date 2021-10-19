import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth,signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();
const useFirebase = () =>{

    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();
    const signInUsingGoole = () =>{
        signInWithPopup(auth, GoogleProvider)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => {
            setError(error.message);
        })
    }
    
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    
    const handleEmailChange = e => {
       SetEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        SetPassword(e.target.value);
    }



 //create user
    const handleRegistration = e =>{
       createUserWithEmailAndPassword(auth, email, password)
       .then(result => {
           const user = result.user;
           console.log(user)
           setError(' ');
       })
       .catch(error => {
           setError(error.message);
       })

        e.preventDefault();
    }
    
   
    //sign in user
    const SignInUser = (Email, Password) =>{
        signInWithEmailAndPassword(auth, Email, Password)
       .then(result => {
           const user = result.user;
           console.log(user)
           setError(' ');
       })
       .catch(error => {
           setError(error.message);
       })
    
    }

    
    const logOut = () =>{
        signOut(auth)
        .then(() =>{
            setUser({});
        })
    }
    useEffect( () =>{
        const unsubscribed = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
        })
        return () => unsubscribed;
    }, [])
    return {
        user,
        error,
        signInUsingGoole,
        logOut,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,

    }
}
export default useFirebase;