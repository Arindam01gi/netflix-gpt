import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constant'
import { addPopularTvSeries } from '../store/tvSlice'

const usePopularTvSeries = () => {
    const dispatch = useDispatch()

    const getPopularTvSeries = async() =>{
        const data = await fetch("https://api.themoviedb.org/3/tv/popular",API_OPTIONS)
        const json = await data.json()
        console.log("json",json)
        dispatch(addPopularTvSeries(json.results))
    }

    useEffect(()=>{
        getPopularTvSeries();
    },[])
}

export default usePopularTvSeries