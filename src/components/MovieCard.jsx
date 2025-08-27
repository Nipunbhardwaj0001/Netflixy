import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-40 sm:w-48 md:w-52 lg:w-56 flex-shrink-0 pr-4 transform transition duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
      <img
        alt="Movie Poster"
        src={IMG_CDN_URL + posterPath}
        className="w-full h-auto rounded-xl shadow-lg object-cover"
      />
    </div>
  );
};

export default MovieCard;
