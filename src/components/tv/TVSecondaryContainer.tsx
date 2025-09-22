import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../MovieList'

const TVSecondaryContainer = () => {
  const series = useSelector((store : any)=> store.tv)
  console.log("series",series)

  return (
    <div className='-mt-40 z-20'>
    <div className='overflow-x-hidden my-5'>
      {series.arraivingTodayTvSeries && <MovieList title={"Arriving Today"} movies= {series.arraivingTodayTvSeries}/>}
    </div>
    <div className='overflow-x-hidden my-5'>
      {series.topRatedTvSeries && <MovieList title={"Top Rated"} movies= {series.topRatedTvSeries}/>}
    </div>
    <div className='overflow-x-hidden my-5'>
      {series.popularTvSeries && <MovieList title={"Popular"} movies= {series.popularTvSeries}/>}
    </div>
    </div>
  )
}

export default TVSecondaryContainer