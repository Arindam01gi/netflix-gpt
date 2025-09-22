
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constant'
import { addPopularMovies } from '../store/movieSlice'
import { addPopularTvSeries } from '../store/tvSlice'

const usePopularMovies = () => {
    const disptach = useDispatch();

    const getPopularSeries = async () => {
        const data = await fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1", API_OPTIONS)
        const json = await data.json()
        disptach(addPopularTvSeries(json.results))
    }

    useEffect(() => {
        getPopularSeries()
    }, [])

}

export default usePopularMovies