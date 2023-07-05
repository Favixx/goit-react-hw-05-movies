import axios from 'axios';

const API_KEY = '856de92b49e100d8b592c0927a143e42';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

export const getTrendingMovies = async () => {
    try {
        const response = await api.get('/trending/movie/day', {
            params: {
                api_key: API_KEY,
            },
        });
        return response.data.results;
    } catch (error) {
        throw new Error('Failed to fetch trending movies');
    }
};

export const searchMovies = async (query) => {
    try {
        const response = await api.get('/search/movie', {
            params: {
                api_key: API_KEY,
                query,
            },
        });
        return response.data.results;
    } catch (error) {
        throw new Error('Failed to search movies');
    }
};

export const getMovieDetails = async (movieId) => {
    try {
        const response = await api.get(`/movie/${movieId}`, {
            params: {
                api_key: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch movie details');
    }
};

export const getMovieCredits = async (movieId) => {
    try {
        const response = await api.get(`/movie/${movieId}/credits`, {
            params: {
                api_key: API_KEY,
            },
        });
        return response.data.cast;
    } catch (error) {
        throw new Error('Failed to fetch movie credits');
    }
};

export const getMovieReviews = async (movieId) => {
    try {
        const response = await api.get(`/movie/${movieId}/reviews`, {
            params: {
                api_key: API_KEY,
                page: 1,
                language: 'en-US'
            },
        });
        return response.data.results;
    } catch (error) {
        throw new Error('Failed to fetch movie reviews');
    }
};
