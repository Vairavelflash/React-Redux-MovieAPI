import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/api/movieApi'
import { APIKey } from '../../common/api/MovieAPIKey'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',async ()=>{
    const movieText = "Harry";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    .catch((err) => console.log('error',err))
    console.log("response from API",response.data.Search)
    return response.data
})
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',async ()=>{
    const seriesText = "bad";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series`)
    .catch((err) => console.log('error',err))
    console.log("response from API",response.data.Search)
    return response.data
})

export const fetchAsyncMoviesOrShowsDetail = createAsyncThunk('movies/fetchAsyncMoviesOrShowsDetail',async (id)=>{
  

    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}$Plot=full`)
    .catch((err) => console.log('error',err))
    console.log("response from API",response.data.Search)
    return response.data
})
const initialState ={
    movies:{},
    shows:{},
    selectUnivOrShow:{}

}

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,{payload}) =>{
            state.movies = payload;
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending] : () =>{
            console.log('pending')
        },
        [fetchAsyncMovies.fulfilled] : (state,{payload}) =>{
            console.log('fetch')
            return {...state,movies:payload}
        },
        [fetchAsyncMovies.rejected] : () =>{
            console.log('reject')
        },
        [fetchAsyncShows.fulfilled] : (state,{payload}) =>{
            console.log('fetch')
            return {...state,shows:payload}
        },
        [fetchAsyncMoviesOrShowsDetail.fulfilled]:(state,{payload}) =>{
            console.log('Fetch')
            return {...state,selectUnivOrShow:payload}
        }
    }
})


// export const {addMovies} = movieSlice.actions;
// export const getAllMovies = (state) => state.movies.movies
export default movieSlice.reducer;