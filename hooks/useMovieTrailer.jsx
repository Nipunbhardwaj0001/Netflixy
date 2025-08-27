import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../src/utils/constants";
import { addTrailerVideo } from "../src/utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const getMovieVideo = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await res.json();

        const trailer = json.results.find(
          video => video.type === "Trailer" && video.site === "YouTube"
        );

        if (trailer) {
          dispatch(addTrailerVideo(trailer));
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    getMovieVideo();
  }, [movieId]);
};

export default useMovieTrailer;
