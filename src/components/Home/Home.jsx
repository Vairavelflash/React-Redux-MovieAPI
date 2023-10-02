import React,{useState,useEffect} from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common /api/movieApi'
import { APIKey } from '../../common /api/MovieAPIKey'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'
function Home() {
  const dispatch = useDispatch();

  useEffect( ()=>{
    const movieText = "Harry"
    const fetchMovies = async () =>{
    // const response  = await axios.get('http://www.omdbapi.com' +`?apiKey=${APIKey}&s=${movieText}&type=movie`) 
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    .catch((err) => console.log('error',err))
    console.log("response from API",response.data.Search)
    dispatch(addMovies(response.data))
    
  } 
      
  fetchMovies()
    
  },[])
  return (
    <div>
 <div className="banner-img"></div>
    <MovieListing/> 
  
    </div>
   
  )
}

export default Home