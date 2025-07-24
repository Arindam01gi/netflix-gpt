import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBackGround = ({ movie_id }) => {

    const trailerVideo = useSelector((store: any) => store.movies?.trailerVideo)
    useMovieTrailer(movie_id)
    return (
        <div className='overflow-x-hidden w-screen'>
            <iframe
            className='w-screen aspect-video'
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=JZw06_bgTgjl4kQw&autoplay=1&mute=1&loop=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    )
}

export default VideoBackGround