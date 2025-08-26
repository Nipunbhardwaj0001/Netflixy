import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BGIMG } from '../utils/constants'

const GptSearch = () => {
  return (
    
    <div >
        <div className="fixed inset-0 -z-10">
                <img src={BGIMG} 
                alt='backImg' className="w-full h-full object-cover"/>
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch