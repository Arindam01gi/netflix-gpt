import React from 'react'
import { IMAGE_CDN } from '../utils/constant'

const MovieCard = ({poster_path}) => {
  return (
    <div className=' pr-4 flex-shrink-0'>
      <img src={IMAGE_CDN + poster_path} alt="movie card" className='w-48'/> 
    </div>
  )
}

export default MovieCard