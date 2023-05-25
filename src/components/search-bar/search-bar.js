import React, { useState } from 'react';
import './search-bar.css';
import search from '..//..//assets/logo/search.svg';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform search or other actions with the search term
        console.log(searchTerm);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    className='search-bar'
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </form>
            <button className='btn-search' type="submit"> <img src={search} alt='search' /> </button>
        </>
    );
}

export default SearchBar;
