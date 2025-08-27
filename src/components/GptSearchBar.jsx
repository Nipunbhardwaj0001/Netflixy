import React, { useRef } from 'react'
import lang from '../utils/langConstants'
import { useDispatch, useSelector } from 'react-redux'
import { generateMovieSuggestions } from '../utils/gemini'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null)

    const dispatch = useDispatch();

    const searchMovieTmdb = async (movie) => {
        const data = await fetch(
            'https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',
            API_OPTIONS
        );
        const json = await data.json();
        return json.results
    };

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);

        // Call Gemini
        const gptResults = await generateMovieSuggestions(searchText.current.value);
        console.log("Gemini Results:", gptResults);

        const promiseArray = gptResults.map(movie => searchMovieTmdb(movie));
        const tmdbResults = await Promise.all(promiseArray)
        console.log(tmdbResults);

        dispatch(addGptMovieResult({movieNames: gptResults,movieResults: tmdbResults}));
    };

    return (
        <div className="pt-[10%] flex justify-center px-4">
            <form
              className="grid grid-cols-12 w-full max-w-2xl bg-black/70 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border-2 border-black transition-all duration-300 focus-within:shadow-[0_0_15px_rgba(239,68,68,0.8)]"
              onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={searchText}
                    type="text"
                    className="col-span-9 p-4 bg-white text-black rounded-l-2xl focus:outline-none"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                />
                <button
                    type="submit"
                    className="col-span-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-r-2xl transition-all duration-300 cursor-pointer hover:shadow-[0_0_12px_rgba(239,68,68,0.8)]"
                    onClick={handleGptSearchClick}
                >
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar
