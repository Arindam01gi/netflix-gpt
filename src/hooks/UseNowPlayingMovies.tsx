import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovie } from '../store/movieSlice'
import { useEffect } from 'react';

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();


    const getNowPlayingMoviesList = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', 
        API_OPTIONS
      )
      const json = await data.json()
      // console.log(json.results)
      dispatch(addNowPlayingMovie(json.results))
    }
  
  
    useEffect(() =>{
      getNowPlayingMoviesList();
    },[])
  
  
}

export default useNowPlayingMovies;
