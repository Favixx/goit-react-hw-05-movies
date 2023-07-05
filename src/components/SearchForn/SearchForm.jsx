import React from 'react';

const SearchForm = ({ inputValue, setInputValue, handleSubmit }) => {
    const handleChange = event => {
        const value = event.target.value;
        setInputValue(value);
    };

    return (
        <form onSubmit={handleSubmit} className='my-3'>
            <input value={inputValue} onChange={handleChange} type="text" className='outline outline-black outline-1 mx-1 px-1 py-1' />
            <button className='border border-black border-1 rounded-lg px-1 py-1'>Search</button>
        </form>
    );
};
export default SearchForm;