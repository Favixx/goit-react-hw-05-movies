import PropTypes from 'prop-types';

const Review = ({ review }) => {
    return (
        <li className='mx-3 my-2 border border-black rounded-sm'>
            <h3 className='text-xl'> Author: {review.author}</h3>
            <p>{review.content}</p>
        </li>
    );
};

export default Review;
Review.propTypes = {
    review: PropTypes.shape({
        author: PropTypes.string,
        content: PropTypes.string,
    }),
};