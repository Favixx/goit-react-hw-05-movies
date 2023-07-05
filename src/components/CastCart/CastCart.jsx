import PropTypes from 'prop-types';
const defaultImg =
    'https://st4.depositphotos.com/4320021/23631/v/450/depositphotos_236319394-stock-illustration-photo-coming-soon-picture-frame.jpg'
const CastCart = ({ cast }) => {
    return (
        <div>
            <img
                src={cast.profile_path ? `https://image.tmdb.org/t/p/original/${cast.profile_path}` : defaultImg}
                alt={cast.name}
                className='w-[150px]'
            />
            <h3>{cast.name}</h3>
            <span>Character: {cast.character}</span>
        </div>
    );
};

export default CastCart;
CastCart.propTypes = {
    cast: PropTypes.shape({
        name: PropTypes.string,
        character: PropTypes.string,
        profile_path: PropTypes.string,
    }),
};