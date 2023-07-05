import Review from 'components/Review/Review';
import { getMovieReviews } from '../service/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Reviews = () => {
    const { movieId } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const reviews = await getMovieReviews(movieId);
                setData(reviews);
            } catch (error) {
                console.error('Failed to fetch movie reviews:', error);
            }
        }
        fetchReviews()
    }, [movieId]);

    return (
        <ul>
            {!data.length ? (
                <li>We don't have any reviews for this movie</li>
            ) : (
                data.map(review => <Review key={review.id} review={review} />)
            )}
        </ul>
    );
};

export default Reviews;
