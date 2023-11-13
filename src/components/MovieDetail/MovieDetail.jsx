import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchAsyncMoviesOrShowsDetail } from '../../features/movies/movieSlice';
function MovieDetail() {
  const {imdbID} = useParams
  const dispatch = useDispatch();
const data = useSelector((state) => state.movies.selectUnivOrShow)
  useEffect(()=>{
dispatch(fetchAsyncMoviesOrShowsDetail(imdbID))
  },[dispatch,imdbID])
  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail