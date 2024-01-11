import { configureStore, combineReducers } from "@reduxjs/toolkit";
import moviesReducer from './movies/movieSlice';

export interface RootState {
  movies: ReturnType<typeof moviesReducer>;
}

const rootReducer = combineReducers<RootState>({
  movies: moviesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;