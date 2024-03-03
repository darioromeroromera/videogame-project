import { createContext, useState, useEffect } from "react";

export const GameContext = createContext();

const GameProvider = ({children}) => {
    const [videogames, setVideogames] = useState([]);

    const [categories, setCategories] = useState([]);
    const [platforms, setPlatforms] = useState([]);

    const [filteredVideogames, setFilteredVideogames] = useState([]);

    const [checkedCategories, setCheckedCategories] = useState([]);
    const [checkedPlatforms, setCheckedPlatforms] = useState([]);

    const [searchText, setSearchText] = useState("");

    const [details, setDetails] = useState({visibility: false});

    useEffect(() => {
    }, [details]);

    const filterGames = () =>{
      if (videogames && checkedCategories && checkedPlatforms) {
        const categoryFilteredList = videogames.filter(videogame => checkIfFilteredGameByCat(videogame));

        const categoryAndPlatformFilteredList = categoryFilteredList.filter(videogame => checkIfFilteredGameByPlat(videogame));

        const fullyFilteredList = categoryAndPlatformFilteredList.filter(videogame => checkIfFilteredGameByName(videogame));
  
        setFilteredVideogames(fullyFilteredList);
      }
    }

    useEffect(() => {
      filterGames();
      
    }, [checkedCategories, checkedPlatforms, videogames]);

    useEffect(() => {
      if (categories) {
        const checkeds = categories.map(cat => {return {id: cat.id, checked: true}});
        setCheckedCategories(checkeds);
      }

    }, [categories]);

    useEffect(() => {
      if (platforms) {
        const checkeds = platforms.map(platform => { return {id: platform.id, checked: true}});
        setCheckedPlatforms(checkeds);
      }
    }, [platforms]);

    const checkIfFilteredGameByCat = videogame => {

      for (const category of videogame.categories) {
        const cat = checkedCategories.find(cat => cat.id == category);

        if (cat && cat.checked)
          return true;
      }
      return false;
    }

    const checkIfFilteredGameByPlat = videogame => {

      for (const platform of videogame.platforms) {
        const plat = checkedPlatforms.find(plat => plat.id == platform);

        if (plat && plat.checked)
          return true;
      }
      return false;
    }

    const checkIfFilteredGameByName = videogame => {
      if (videogame.name.toLowerCase().includes(searchText.toLowerCase()) || videogame.description.toLowerCase().includes(searchText.toLowerCase()))
        return true;
      
      return false;
    }

    const getCategories = async () => {
        const res = await fetch('http://localhost:8000/categories');
        const data = await res.json();      
        setCategories(data);
    };

    const getPlatforms = async () => {
        const res = await fetch('http://localhost:8000/platforms');
        const data = await res.json();
        setPlatforms(data);
    };

    useEffect(() => {
        getCategories();
        getPlatforms();

    }, []);

    useEffect(() => {
      getVideoGames();
    }, []);

    const getVideoGames = async () => {
        const res = await fetch('http://localhost:8000/videogames');
        const data = await res.json();
        setVideogames(data);
    };

    return (
        <GameContext.Provider value={{videogames, setVideogames, categories, setCategories, platforms, setPlatforms, 
            filteredVideogames, setFilteredVideogames, checkedCategories, setCheckedCategories, checkedPlatforms, setCheckedPlatforms, searchText, setSearchText,
            details, setDetails, filterGames, getCategories, getPlatforms, getVideoGames}}>
            {children}
        </GameContext.Provider>
    )
};

export default GameProvider;