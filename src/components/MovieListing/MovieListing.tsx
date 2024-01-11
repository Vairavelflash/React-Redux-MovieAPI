import React from 'react';
import { useSelector } from 'react-redux';
import  {RootState } from '../../features/store'; // Assuming your store is configured properly
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';

const MovieListing: React.FC = () => {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const shows = useSelector((state: RootState) => state.movies.shows);
  console.log('store', movies);

  let renderMovies: JSX.Element | string = "";
  let renderShows: JSX.Element | string = "";

  renderMovies =
    movies?.Response === "True" ? (
      movies?.Search.map((movie:any, index:number) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies?.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie:any, index:number) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
