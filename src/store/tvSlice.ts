import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
  name: "tv",
  initialState: {
    terndingTvSeries: null,
    tvSeriesTrailer: null,
    arraivingTodayTvSeries: null,
    topRatedTvSeries: null,
    popularTvSeries : null,
  },
  reducers: {
    addTendingTvSeries: (state, action) => {
      state.terndingTvSeries = action.payload;
    },
    addTvSeriesTrailer: (state, action) => {
      state.tvSeriesTrailer = action.payload;
    },
    addArraivingTodayTvSeries: (state, action) => {
      state.arraivingTodayTvSeries = action.payload;
    },
    addTopRatedTvSeries: (state, action) => {
      state.topRatedTvSeries = action.payload;
    },
    addPopularTvSeries: (state,action) =>{
        state.popularTvSeries = action.payload
    }
  },
});

export const {
  addTendingTvSeries,
  addTvSeriesTrailer,
  addArraivingTodayTvSeries,
  addTopRatedTvSeries,
  addPopularTvSeries
} = tvSlice.actions;

export default tvSlice.reducer;
