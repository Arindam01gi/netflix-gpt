import { createSlice } from "@reduxjs/toolkit";


const tvSlice = createSlice({
    name : "tv",
    initialState : {
        terndingTvSeries : null,
        tvSeriesTrailer : null
    },
    reducers:{
        addTendingTvSeries : (state,action) =>{
            state.terndingTvSeries = action.payload
        },
        addTvSeriesTrailer : (state,action) =>{
            state.tvSeriesTrailer = action.payload
        }
    }
})

export const {addTendingTvSeries,addTvSeriesTrailer} = tvSlice.actions

export default tvSlice.reducer