import React from 'react'
import Header from './Header'
import UseNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'



const Browse = () => {
 UseNowPlayingMovies() 


  return (
    <div >
      <div className="flex  flex-col justify-between w-full">
        <Header />
        <MainContainer />
        <SecondaryContainer/>
      </div>
    </div>
  )
}

export default Browse