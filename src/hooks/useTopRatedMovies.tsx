import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constant'
import { addTopRatedMovies } from '../store/movieSlice'

const useTopRatedMovies = () => {
    const disptach = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS)
        const json = await data.json()
        disptach(addTopRatedMovies(json.results))
    }

    useEffect(() => {
        getPopularMovies()
    }, [])
}

export default useTopRatedMovies