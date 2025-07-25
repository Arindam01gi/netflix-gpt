import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'




const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()

 



  return (
    <div >
      <div className="flex  flex-col justify-between w-full">
        <Header />
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  )
}

export default Browse