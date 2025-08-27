import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pb-16 flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 flex flex-col items-center">
        {/* Heading + Tagline */}
        <div className="px-4 pt-20 md:pt-32 flex flex-col items-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Look Out For Your Next Favorite Watch
          </h1>
          <p className="text-gray-300 max-w-2xl mb-6 sm:mb-8 text-xs sm:text-sm md:text-base">
            Get AI-powered recommendations for movies based on your preferences
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-3xl">
          <GptSearchBar />
        </div>

        <div className="mt-3 sm:mt-4 text-gray-400 text-xs sm:text-sm text-center max-w-md">
          Try <span className="italic">'romantic comedies'</span>,{" "}
          <span className="italic">'Oscar-winning dramas'</span>, or{" "}
          <span className="italic">'animated classics'</span>
        </div>


        {/* Results */}
        <div className="w-full max-w-5xl mt-10">
          <GptMovieSuggestions />
        </div>
      </div>
    </div>
  );
};

export default GptSearch;
