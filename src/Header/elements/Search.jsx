import React from 'react';
import './search.css';

const Search = () => {
    return (
        <>
            <section className="search">
                <h2 className="title">
                    Fire Up
                </h2>
                <h3 className="title_2">
                    & The Grill...
                </h3>
                <input id='search_bar' type="text" placeholder='Search your item' />
            </section>
        </>
    );
}

export default Search;
