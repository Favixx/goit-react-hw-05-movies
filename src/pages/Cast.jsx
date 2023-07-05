import CastCart from 'components/CastCart/CastCart';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/api';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchMovieCast = async () => {
            try {
                const response = await getMovieCredits(movieId);
                setCast(response);
            } catch (error) {
                console.log(error);
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchMovieCast();
    }, [movieId]);

    return isLoading ? (
        <Loader />
    ) : (
        <ul className='flex flex-wrap'>
            {cast.map(cast => (
                <li key={cast.id} className='px-5 py-5'>
                    <CastCart cast={cast} />
                </li>
            ))}
        </ul>
    );
};

export default Cast;