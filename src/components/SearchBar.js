import { useState } from 'react';
import './componentsCSS/searchBar.css';

const SearchBar = ({searchText, setSearchText, filterGames}) => {
    return (
        <div className='searchBar__div'>
            <h1 className="searchBar__h1">Búsquedas</h1>
            <label htmlFor='search'>Buscar juego por título:</label>
            <input className='searchBar__input' name='search' id='search' type="text" value={searchText} onChange={e => {
                setSearchText(e.target.value);
                if (e.target.value == "")
                    filterGames();
                console.log(e.target.value);
            }}/>
            <button onClick={filterGames}  className='searchBar__btn'>Buscar</button>
        </div>
    );
};

export default SearchBar;