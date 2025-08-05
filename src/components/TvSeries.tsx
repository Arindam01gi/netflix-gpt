import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addTendingTvSeries } from '../store/tvSlice'
import useTrendingTvSeries from '../hooks/useTrendingTvSeries'
import TVMainContainer from './tv/TVMainContainer'
import TVSecondaryContainer from './tv/TVSecondaryContainer'

const TvSeries = () => {

    const TvSeries = useSelector((store :any) => store.tv)
    console.log("TvSeries",TvSeries)

    useTrendingTvSeries();

    

    return (
        <div >
            <div className="flex  flex-col justify-between w-full">
                <TVMainContainer />
                <TVSecondaryContainer />
            </div>
        </div>
    )
}

export default TvSeries