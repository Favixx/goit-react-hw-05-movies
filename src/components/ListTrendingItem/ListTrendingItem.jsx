import React from 'react';
import { Link } from 'react-router-dom';

const ListTrendingItem = ({ itemId, title }) => {
    return (
        <li key={itemId}>
            <Link to={`/movies/${itemId}`}>{title}</Link>
        </li>
    );
};
export default ListTrendingItem;