import React,{useState,useEffect} from 'react'
import MovieListing from '../MovieListing/MovieListing'

import axios from 'axios'
import { useDispatch } from 'react-redux'
import {  fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
function Home() {
  const dispatch = useDispatch();


  useEffect( ()=>{
   
    // const response  = await axios.get('http://www.omdbapi.com' +`?apiKey=${APIKey}&s=${movieText}&type=movie`) 
   dispatch(fetchAsyncMovies())
   dispatch(fetchAsyncShows())
    
  },[dispatch])
  return (
    <div>
 <div className="banner-img"></div>
    <MovieListing/> 
    </div>
   
  )
}

export default Home