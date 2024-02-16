import './componentsCSS/searchBar.css';

const SearchBar = () => {
    return (
        <div className='searchBar__div'>
            <h1 className="searchBar__h1">Búsquedas</h1>
            <label htmlFor='search'>Buscar juego por título:</label>
            <input className='searchBar__input' name='search' type="text"/>
            <button className='searchBar__btn'>Buscar</button>
        </div>
    );
};

export default SearchBar;