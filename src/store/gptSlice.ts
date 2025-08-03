import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    movieResults: null,
    movieName: null,
  },
  reducers: {
    addGptMovieResult: (state, action) => {
      const { movieName, movieResults } = action.payload;
      state.movieName = movieName
      state.movieResults = movieResults
    },
  },
});
export const { addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
