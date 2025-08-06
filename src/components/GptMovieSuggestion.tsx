import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {
  const gpt = useSelector((store: any) => store.gpt)
  const { movieResults, movieName } = gpt


  return (
    <div className='overflow-x-hidden my-5 px-16 sticky top-[100px]'>
       <MovieList title={movieName} movies={movieResults} /> 
    </div>
  )
}

export default GptMovieSuggestion