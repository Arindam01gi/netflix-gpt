import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
  name: "tv",
  initialState: {
    terndingTvSeries: null,
    tvSeriesTrailer: null,
    arraivingTodayTvSeries: null,
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
  },
});

export const { addTendingTvSeries, addTvSeriesTrailer ,addArraivingTodayTvSeries } = tvSlice.actions;

export default tvSlice.reducer;
