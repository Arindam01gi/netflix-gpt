import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../store/movieSlice'
import { API_OPTIONS } from '../utils/constant'

const useMovieTrailer = ( movie_id ) => {
    const dispatch = useDispatch()

    const getMovieVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json()
        const filterData = json.results.filter((result) => result.type === "Trailer")
        const trailerVideo = filterData.length > 0 ? filterData[0] : json?.results[0]
        dispatch(addTrailerVideo(trailerVideo))
    }


    useEffect(() => {
        getMovieVideo()
    }, [])

}

export default useMovieTrailer