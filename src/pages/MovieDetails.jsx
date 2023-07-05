import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { getMovieDetails } from 'service/api';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null)
    const location = useLocation();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await getMovieDetails(movieId)
                setMovieDetails(response)
            } catch (error) {
                console.log(error)
            }
        }
        fetchMovieDetails()
    }, [movieId])
    if (!movieDetails) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <Link to={location.state ?? '/'}>Go back</Link>
            <div key={movieDetails.id}>
                <img
                    width={250}
                    src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                    alt="Movie Poster"
                />
                <h1>
                    <Link
                        target="_blank"
                        style={{ textDecoration: `none` }}
                        to={movieDetails.homepage}
                    >
                        {movieDetails.title}
                    </Link>
                </h1>
                {movieDetails && movieDetails.vote_average && (
                    <p>Ratings: {String(movieDetails.vote_average).slice(0, 3)}</p>
                )}
                <p>Overview</p>
                <p>{movieDetails.overview}</p>
                <p>Genres</p>
                {movieDetails.genres &&
                    movieDetails.genres.map((el, index) => (
                        <span key={el.id}>
                            {el.name}
                            {index !== movieDetails.genres.length - 1 && ', '}
                        </span>
                    ))}
            </div>
            <div>
                <Link state={location.state} to="cast">
                    Cast
                </Link>
                <br />
                <Link state={location.state} to="reviews">
                    Reviews
                </Link>
            </div>
            <Outlet />
        </div>
    );
}

export default MovieDetails