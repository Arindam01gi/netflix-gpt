import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../store/movieSlice'

const VideoBackGround = ({ movie_id }) => {
    const dispatch = useDispatch()
    const trailerVideo = useSelector((store: any) => store.movies?.trailerVideo)


    const getMovieVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/1087192/videos?language=en-US', API_OPTIONS)
        const json = await data.json()
        const filterData = json.results.filter((result) => result.type === "Trailer")
        const trailerVideo = filterData.length > 0 ? filterData[0] : json?.results[0]
        dispatch(addTrailerVideo(trailerVideo))
    }


    useEffect(() => {
        getMovieVideo()
    }, [])


    return (
        <div>
            <iframe
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=JZw06_bgTgjl4kQw`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    )
}

export default VideoBackGround