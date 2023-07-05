import ListTrendingItem from "components/ListTrendingItem/ListTrendingItem";
import PropTypes from "prop-types";
const ListTrending = ({ apiMovies }) => {
    return (
        <ul className="mx-3 ">
            {apiMovies.map(el => (
                <ListTrendingItem
                    key={el.id}
                    itemId={el.id}
                    title={el.original_title}
                />
            ))}
        </ul>
    );
};
ListTrending.propTypes = {
    apiMovies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            original_title: PropTypes.string.isRequired,
        })
    ).isRequired,
};
export default ListTrending;