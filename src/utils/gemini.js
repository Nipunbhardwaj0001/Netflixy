// src/utils/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export const generateMovieSuggestions = async (query) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt =
      "Act as a Movie Recommendation System and suggest some movies for the query: " +
      query +
      ". Only give me names of 5 movies, comma separated. Example: Gadar, Sholay, Don, Golmal, Koi Mil Gaya";

    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();
    const movies = text.split(",").map((movie) => movie.trim());

    return movies;
    // return result.response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, something went wrong.";
  }
};

console.log("Gemini API Key:", import.meta.env.VITE_GEMINI_API_KEY);
