import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies = useSelector((store: { movies: { nowPlayingMovies: any } }) => store.movies?.nowPlayingMovies)

    if (!movies) return null

    const mainMovie = movies[0]
    console.log(mainMovie)
    return (
        <div className="h-screen flex items-center ">
            <VideoTitle original_title={mainMovie.original_title} overview={mainMovie.overview} />
        </div>
    )
}

export default MainContainer