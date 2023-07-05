import PropTypes from 'prop-types';

const CastCart = ({ cast }) => {
    return (
        <div>
            <img
                src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
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