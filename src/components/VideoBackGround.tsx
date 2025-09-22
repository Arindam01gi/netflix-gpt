import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'
import useTvSeriesTrailer from '../hooks/useTvSeriesTrailer'

const VideoBackGround = ({ id, type }) => {

    const trailerVideo = type == "movie" ?
        useSelector((store: any) => store.movies?.trailerVideo) :
        useSelector((store: any) => store.tv?.tvSeriesTrailer)
    console.log("trailerVideo", trailerVideo)
    console.log("id", id)
    type == "movie" ? useMovieTrailer(id) : useTvSeriesTrailer(id)
    return (
        <div className='overflow-x-hidden'>
            <iframe
                className='w-screen aspect-video'
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
                title="YouTube video player"
                allow=""
            ></iframe>
        </div>
    )
}

export default VideoBackGround