import React from 'react'
import lang from '../utils/langConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang)
  return (
    <div className="pt-[10%] flex justify-center px-4">
      <form className="grid grid-cols-12 w-full max-w-2xl bg-black/70 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border-2 border-black">
        <input
          type="text"
          className="col-span-9 p-4 bg-white text-black rounded-l-2xl focus:outline-none"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          type="submit"
          className="col-span-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-r-2xl transition"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
