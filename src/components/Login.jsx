import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {auth} from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const navigate = useNavigate()
    const handleButtonClick = () => {
        
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;

        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                // Profile updated!
                navigate("/browse");
                // ...
                }).catch((error) => {
                // An error occurred
                setErrorMessage(error.message);
                // ...
                });
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                setErrorMessage(errorCode + "-"+ errorMessage)
            });
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate("/browse");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+ "-" + errorMessage)
            });
        }
    }
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header showProfile={false}/>
            <div className="absolute inset-0">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_large.jpg" 
                alt='Logo' className="w-full h-full object-cover"/>
            </div>
            <form onSubmit={(e) => e.preventDefault() } className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black/80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign in" : "Sign Up"}</h1>
                {!isSignInForm && (<input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 border-2 w-full bg-gray-400 text-black"/>)}
                <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 border-2 w-full bg-gray-400 text-black"/>
                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 border-2 w-full bg-gray-400 text-black"/>
                <p className="text-red-600 font-bold text-lg py-2">{errorMessage}</p>
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign in" : "Sign Up"}</button>
                <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflixy? Sign up now" : "Already registered? Sign in Now"}</p>
            </form>
        </div>
    )
}

export default Login;