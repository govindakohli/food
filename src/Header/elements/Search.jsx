import React from 'react';
import './search.css'

const Search = () => {
    return (
        <>
        <h2 className="tittle">
            Fire Up
        </h2>
        <h3 className="tittle_2">
            The Grill...
        </h3>
        <section className="search">
           <input id='Sesrch_bar' type="text" placeholder='Search your item' /> 
           {/* <button id='search_button'><i class="fa-solid fa-magnifying-glass"></i></button> */}
        </section>
        </>
    );
}

export default Search;
