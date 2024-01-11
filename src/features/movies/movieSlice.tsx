import { createSlice,createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import movieApi from '../../common/api/movieApi'
import { APIKey } from '../../common/api/MovieAPIKey'

interface MovieState {
    movies:any;
    shows:any;
    selectMovieOrShow:any;
}
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',async ()=>{
    const movieText = "Harry";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    .catch((err) => console.log('error',err))
    console.log("response from API",response?.data?.Search)
    return response?.data
})
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',async ()=>{
    const seriesText = "bad";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series`)
    .catch((err) => console.log('error',err))
    console.log("response from API",response?.data?.Search)
    return response?.data
})

export const fetchAsyncMoviesOrShowsDetail = createAsyncThunk('movies/fetchAsyncMoviesOrShowsDetail',async (id)=>{
  

    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
    .catch((err) => console.log('error',err))
    console.log("response from API",response?.data?.Search)
    return response?.data
})
const initialState :MovieState={
    movies:{},
    shows:{},
    selectMovieOrShow:{}

}

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,{payload} :PayloadAction<any>) =>{
            state.movies = payload;
        },
        removeSelectedMoviesOrShowsDetail: (state,{payload}) =>{
            state.selectMovieOrShow = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncMovies.pending, (state) => {
                console.log('pending');
            })
            .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
                console.log('fetch');
                return { ...state, movies: payload };
            })
            .addCase(fetchAsyncMovies.rejected, (state) => {
                console.log('reject');
            })
            .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
                console.log('fetch');
                return { ...state, shows: payload };
            })
            .addCase(fetchAsyncMoviesOrShowsDetail.fulfilled, (state, { payload }) => {
                console.log('Fetch');
                return { ...state, selectMovieOrShow: payload };
            });
    }
});



// export const {addMovies} = movieSlice.actions;
export const {removeSelectedMoviesOrShowsDetail} = movieSlice.actions
// export const getAllMovies = (state) => state.movies.movies
export default movieSlice.reducer;