import React from 'react'
import { IMAGE_CDN } from '../utils/constant'

const MovieCard = ({ poster_path }) => {
  return (
    <div className=' pr-4 flex-shrink-0 '>
      {poster_path ?
        <img src={IMAGE_CDN + poster_path} alt="movie card" className='w-48 h-60 rounded-md' />
        : <img src={"/fallback_poster.webp"} alt="movie card" className='w-48 rounded-md' />}

    </div>
  )
}

export default MovieCard