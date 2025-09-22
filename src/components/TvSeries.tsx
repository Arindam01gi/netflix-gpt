import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addTendingTvSeries, addTopRatedTvSeries } from '../store/tvSlice'
import useTrendingTvSeries from '../hooks/useTrendingTvSeries'
import TVMainContainer from './tv/TVMainContainer'
import TVSecondaryContainer from './tv/TVSecondaryContainer'
import { addArraivingTodayTvSeries } from '../store/tvSlice'
import useArraivingTodayTvSeries from '../hooks/useArraivingTodayTvSeries'
import useTopRatedTvSeries from '../hooks/useTopRatedTvSeries'
import usePopularMovies from '../hooks/usePopularMovies'

const TvSeries = () => {

    useTrendingTvSeries();
    useArraivingTodayTvSeries();
    useTopRatedTvSeries();
    usePopularMovies();

    

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