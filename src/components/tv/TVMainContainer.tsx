import React, { useEffect } from 'react'
import VideoTitle from '../VideoTitle'
import VideoBackGround from '../VideoBackGround'
import { useDispatch, useSelector } from 'react-redux'
import useTrendingTvSeries from '../../hooks/useTrendingTvSeries'

const TVMainContainer = () => {
    const series = useSelector((store: any) => store.tv?.terndingTvSeries)

    if (!series) return null

    const mainSeries = series[0]
    console.log("series id",mainSeries)
    useTrendingTvSeries(mainSeries.id)





    return (
        <div className="h-screen flex items-center ">
            <VideoTitle original_title={mainSeries.name} overview={mainSeries.overview} />
            <VideoBackGround id = {mainSeries.id} type={"tv"} />
        </div>
    )
}

export default TVMainContainer