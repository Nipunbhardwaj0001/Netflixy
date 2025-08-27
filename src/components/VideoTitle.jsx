import React from "react";

const VideoTitle = ({ title, overview }) => {
  const handlePlayClick = () => {
    // Replace this with your actual YouTube trailer URL
    const youtubeUrl = "https://www.youtube.com/watch?v=d9erkpdh5o0";
    window.open(youtubeUrl, "_blank"); // opens in a new tab
  };

  return (
    <div className="w-screen aspect-video absolute top-0 left-0 flex flex-col justify-center px-16 bg-gradient-to-r from-black/80 via-black/60 to-transparent text-white">
      {/* Title */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-xl leading-snug">
        {title}
      </h1>

      {/* Overview */}
      <p className="mt-6 text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl leading-relaxed drop-shadow-lg">
        {overview}
      </p>

      {/* Buttons */}
      <div className="mt-8 flex space-x-4">
        <button
          onClick={handlePlayClick}
          className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg shadow-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <svg
            className="w-6 h-6 mr-2"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5.14v14l11-7-11-7z" />
          </svg>
          Play
        </button>

        <button className="flex items-center gap-2 bg-gray-700/80 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-gray-600 hover:scale-105 transition-transform duration-300">
          <svg
            className="w-5 h-5 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
