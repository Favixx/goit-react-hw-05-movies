import ListTrendingItem from "components/ListTrendingItem/ListTrendingItem";

const ListTrending = ({ apiMovies }) => {
    return (
        <ul>
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
export default ListTrending;