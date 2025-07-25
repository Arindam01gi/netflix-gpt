import React, { useEffect } from 'react'
import { addUpcomingMovies } from '../store/movieSlice'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';

const useUpcomingMovies = () => {
    const disptach = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS)
        const json = await data.json()
        disptach(addUpcomingMovies(json.results))
    }

    useEffect(() => {
        getPopularMovies()
    }, [])
}

export default useUpcomingMovies