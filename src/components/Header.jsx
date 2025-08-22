import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "../utils/firebase"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO, UICON } from "../utils/constants";
const Header = ({ showProfile = true }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  }
  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName}= user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        // ...
        navigate("/browse")
      } else {
        dispatch(removeUser());
        // ...
        navigate("/")
      }
    });
    return () => unsubscribe();
    }, []);
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex z-10 justify-between'>
      <img className="w-44" src={LOGO}
      alt='Logo'/>
      {user && showProfile && (<div className="flex p-2">
      <img className="w-12 h-12" alt="usericon" src={UICON}/>
      <button onClick={handleSignOut} className="font-bold text-white cursor-pointer">(Sign Out)</button>
      </div>)}
    </div>
  )
}

export default Header