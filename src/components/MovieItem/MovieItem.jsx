import React from "react";
import { Link, useLocation } from "react-router-dom";
const MovieItem = ({ movie }) => {
    const location = useLocation()
    return (
        <li className='flex mx-3 my-3' key={movie.id}>
            <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to={`/movies/${movie.id}`}
                state={location}
            >
                <img
                    width={100}
                    src={
                        movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                    }
                    alt=""
                />
            </Link>
            <Link
                className='text-black'
                to={`/movies/${movie.id}`}
                state={location}
            >
                {movie.title}
                <br />
                {movie.release_date}
            </Link>
        </li>
    );
};
export default MovieItem