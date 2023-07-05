import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListTrendingItem = ({ itemId, title }) => {
    return (
        <li key={itemId}>
            <Link to={`/movies/${itemId}`}>{title}</Link>
        </li>
    );
};
ListTrendingItem.propTypes = {
    itemId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};

export default ListTrendingItem;