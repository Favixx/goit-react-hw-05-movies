import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/api';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchMovieCast = async () => {
            try {
                const response = await getMovieCredits(movieId);
                setCast(response);
            } catch (error) {
                console.log(error);
            }
        };

        fetchMovieCast();
    }, [movieId]);

    return (
        <div>
            <h1>Cast</h1>
            {cast.map((actor) => (
                <div key={actor.id}>{actor.name}</div>
            ))}
        </div>
    );
};

export default Cast;