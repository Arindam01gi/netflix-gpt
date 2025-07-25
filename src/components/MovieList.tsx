import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies } : {title : string , movies : Array<any>}) => {
  console.log("here2")
  return (
    <div className=' px-8 '>
         <h2 className='text-white font-bold text-2xl py-4'>{title}</h2>
          <div className='flex'>
            <div className='flex'>
                {movies?.map((movie) => (
                    <MovieCard key={movie.id} poster_path={movie.poster_path}/>
                ))}
            </div>
          </div>
    </div>
  )
}

export default MovieList