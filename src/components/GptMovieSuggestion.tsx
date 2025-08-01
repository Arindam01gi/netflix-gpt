import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const GptMovieSuggestion = () => {
  const gpt = useSelector((store: any) => store.gpt) // Corrected: Accessing store.gpt instead of store.gptSlice
  const {movieResults} = gpt
  console.log("movieResults",movieResults)
  return (
     <div className='flex flex-wrap justify-center'>
      {movieResults?.map((movie:any) =>{ // Added optional chaining to movieResults
        // Check if the movie has a poster path before rendering
        // and if it's a movie or tv show (not a person)
        if (movie.poster_path && (movie.media_type === 'movie' || movie.media_type === 'tv')) {
            return <MovieCard key={movie.id} poster_path={movie.poster_path} />;
        }
        return null; // Don't render if no poster_path or not a movie/tv
      })}
     </div>
  )
}

export default GptMovieSuggestion