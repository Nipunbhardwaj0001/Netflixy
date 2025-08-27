import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANG, UICON } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import AppLogo from "../assets/AppLogo.png";

const Header = ({ showProfile = true }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => navigate("/error"));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const hanldeGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const navigateToBrowse = () => {
    navigate("/browse");
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <header className="absolute top-0 w-full z-20 bg-gradient-to-b from-black via-black/90 to-transparent px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <img
        className="w-40 cursor-pointer transition-transform duration-300 hover:scale-105 drop-shadow-lg"
        src={AppLogo}
        alt="Logo"
        onClick={() => navigate("/browse")}
      />

      {/* Right Side */}
      {user && showProfile && (
        <div className="flex items-center space-x-6">
          {/* Language Selector */}
          {showGptSearch && (
            <select
              className="p-2 rounded-md bg-black text-white border border-gray-600 hover:border-white focus:ring-1 focus:ring-white transition"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANG.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="relative text-white font-medium group px-2 py-1"
            onClick={hanldeGptSearchClick}
          >
            <span className="transition-colors duration-300 group-hover:text-gray-300 cursor-pointer">
              {showGptSearch ? "Homepage" : "GPT Search"}
            </span>
            <span
              className="absolute left-0 bottom-0 h-0.5 w-0 bg-white 
                        transition-all duration-300 group-hover:w-full"
            ></span>
          </button>

          <button
            onClick={handleSignOut}
            className="relative text-gray-300 font-medium group px-2 py-1"
          >
            <span className="transition-colors duration-300 group-hover:text-white cursor-pointer">
              Sign out
            </span>
            <span
              className="absolute left-0 bottom-0 h-0.5 w-0 bg-white 
                        transition-all duration-300 group-hover:w-full"
            ></span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
