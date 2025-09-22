import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constant'
import { addTopRatedTvSeries } from '../store/tvSlice'

const useTopRatedTvSeries = () => {
    const dispatch = useDispatch()

    const getTopRatedTvSeries = async() =>{
        const data = await fetch("https://api.themoviedb.org/3/tv/top_rated",API_OPTIONS)
        const json = await data.json()
        dispatch(addTopRatedTvSeries(json.results))
    }

    useEffect(()=>{
        getTopRatedTvSeries();
    },[])
    
}

export default useTopRatedTvSeries