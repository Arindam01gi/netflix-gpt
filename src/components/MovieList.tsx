import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies } : {title : string , movies : string[]}) => {
    console.log(movies)
  return (
    <div className='px-32'>
         <h2 className='text-white font-bold text-2xl'>{title}</h2>

         <MovieCard />

    </div>
  )
}

export default MovieList