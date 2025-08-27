import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { BGIMG } from "../utils/constants";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          }).catch((error) => {
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value).catch((error) => {
        setErrorMessage(error.code + " - " + error.message);
      });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen w-screen flex flex-col">
      <Header showProfile={false} />
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={BGIMG} alt="backImg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Centered Form */}
      <div className="relative flex flex-1 items-center justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-md p-10 text-white rounded-3xl bg-black/80 shadow-lg"
        >
          <h1 className="font-bold text-3xl py-4 text-center">
            {isSignInForm ? "Sign in" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-3 border border-gray-500 w-full rounded-lg bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-3 border border-gray-500 w-full rounded-lg bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          {/* Password with toggle */}
          <div className="relative my-3">
            <input
              ref={password}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="p-4 border border-gray-500 w-full rounded-lg bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <span
              className="absolute right-4 top-4 cursor-pointer text-gray-600 hover:text-black"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Error */}
          <p className="text-red-500 font-semibold text-sm py-2 text-center">
            {errorMessage}
          </p>

          {/* Submit */}
          <button
            className="p-4 my-4 bg-red-700 hover:bg-red-800 w-full rounded-lg font-semibold transition cursor-pointer"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign in" : "Sign Up"}
          </button>

          {/* Toggle */}
          <p
            className="p-2 text-center cursor-pointer hover:underline"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflixy? Sign up now"
              : "Already registered? Sign in Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
