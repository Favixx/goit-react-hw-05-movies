import ListTrending from 'components/ListTrending/ListTrending';
import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from 'service/api';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await getTrendingMovies();
                setMovies(response);
            } catch (error) {
                setError(error);
            }
        };

        fetchMovies();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h2>Trending today</h2>
            <ListTrending apiMovies={movies} />
        </div>
    );
};

export default Home;
