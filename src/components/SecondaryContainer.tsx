import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store : any)=> store.movies)
  return (
    <div className='-mt-40 z-20'>
    <div className='overflow-x-hidden my-5'>
      {movies.nowPlayingMovies && <MovieList title={"Now Playing"} movies= {movies.nowPlayingMovies}/>}
    </div>
    <div className='overflow-x-hidden my-5'>
      {movies.popularMovies && <MovieList title={"Popular "} movies= {movies.popularMovies}/>}
    </div>
    <div className='overflow-x-hidden my-5'>
      {movies.topRatedMovies && <MovieList title={"Top Rated "} movies= {movies.topRatedMovies}/>}
    </div>
    <div className='overflow-x-hidden my-5'>
      {movies.upcomingMovies && <MovieList title={"Upcoming "} movies= {movies.upcomingMovies}/>}
    </div>

    </div>
  )
}

export default SecondaryContainer