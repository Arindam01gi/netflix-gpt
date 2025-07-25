import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store : any)=> store.movies)
  console.log("here")
  return (
    <div className='overflow-x-hidden'>
      {movies.nowPlayingMovies && <MovieList title={"Now Playing"} movies= {movies.nowPlayingMovies}/>}
    </div>
  )
}

export default SecondaryContainer