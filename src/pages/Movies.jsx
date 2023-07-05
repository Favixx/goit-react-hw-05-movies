import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'service/api';
import SearchForm from '../components/SearchForn/SearchForm'
import MovieList from 'components/MovieList/MovieList';
const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const [inputValue, setInputValue] = useState(query || '');
    const [dataSearch, setDataSearch] = useState([]);

    const handleSubmit = event => {
        event.preventDefault();
        setSearchParams({ query: inputValue });
    };

    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await searchMovies(query);
                setDataSearch(response);
            } catch (error) {
                console.log(error);
            }
        };
        query && getMovie();
    }, [query]);

    return (
        <div>
            <h1 className='text-4xl'>Search</h1>
            <SearchForm inputValue={inputValue} setInputValue={setInputValue} handleSubmit={handleSubmit} />

            <MovieList movies={dataSearch} />
        </div>
    );
};

export default Movies;