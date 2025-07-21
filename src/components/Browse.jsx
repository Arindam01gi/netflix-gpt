import React from 'react'
import Header from './Header'
import UseNowPlayingMovies from '../hooks/useNowPlayingMovies'



const Browse = () => {
 UseNowPlayingMovies() 


  return (
    <div className="mt-12">
      <div className="flex items-center justify-between w-full">
        <Header />
      </div>
    </div>
  )
}

export default Browse