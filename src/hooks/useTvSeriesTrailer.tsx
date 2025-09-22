import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTvSeriesTrailer } from '../store/tvSlice'
import { API_OPTIONS } from '../utils/constant'

const useTvSeriesTrailer = (id) => {

    const dispatch = useDispatch()

    const getTvSeriesVideo = async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`, API_OPTIONS)
            const json = await data.json()
            const filterData = json.results.filter((result) => result.type === "Trailer")
            const trailerVideo = filterData.length > 0 ? filterData[0] : json?.results[0]
            dispatch(addTvSeriesTrailer(trailerVideo))

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => { 
        getTvSeriesVideo()
    }, [])

}

export default useTvSeriesTrailer