import React from 'react'
import MovieCard from './MovieCard'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';


const MovieList = ({ title, movies } : {title : string , movies : Array<any>}) => {

    if (!movies) return null; 

    return (
     <div className=' px-8 '>
          <h2 className='text-white font-bold text-2xl py-4'>{title}</h2>
          {/* Replace Slider with Swiper */}
          <Swiper
            spaceBetween={10} 
            slidesPerView={7.5} 
            freeMode={true} 
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper flex overflow-visible"
          >
                {movies?.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <MovieCard poster_path={movie.poster_path}/>
                    </SwiperSlide>
                ))}
          </Swiper>
     </div>
    )
}

export default MovieList