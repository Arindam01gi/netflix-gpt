import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTendingTvSeries, addTvSeriesTrailer } from '../store/tvSlice'
import { API_OPTIONS } from '../utils/constant'

const useTrendingTvSeries = (id) => {
    const dispatch = useDispatch()

    const getTvSeriesVideo  = async() =>{
        try{
            const data = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,API_OPTIONS)
            const json = await data.json()
            dispatch(addTvSeriesTrailer(json))

        }catch(err){
            console.log(err)
        }
    }

    useEffect(() =>{
        getTvSeriesVideo()
    },[])

}

export default useTrendingTvSeries