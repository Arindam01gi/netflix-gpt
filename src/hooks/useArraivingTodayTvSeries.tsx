import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constant'
import { addArraivingTodayTvSeries } from '../store/tvSlice'

const useArraivingTodayTvSeries = () => {
    const disptach = useDispatch()

    const getArraivingTodayTvSeries = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', API_OPTIONS)
        const json = await data.json()
        disptach(addArraivingTodayTvSeries(json.results))
    }

    useEffect(() => {
        getArraivingTodayTvSeries()
    }, [])
}

export default useArraivingTodayTvSeries