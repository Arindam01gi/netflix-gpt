
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constant'
import { addPopularMovies } from '../store/movieSlice'

const usePopularMovies = () => {
    const disptach = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS)
        const json = await data.json()
        disptach(addPopularMovies(json.results))
    }

    useEffect(() => {
        getPopularMovies()
    }, [])

}

export default usePopularMovies