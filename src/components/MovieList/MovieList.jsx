import MovieItem from 'components/MovieItem/MovieItem';
import React from 'react';
const MovieList = ({ movies, location }) => {
    return (
        <ul>
            {movies.map(movie => (
                <MovieItem movie={movie} location={location} key={movie.id} />
            ))}
        </ul>
    );
};
export default MovieList;