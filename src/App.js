import { useState, useEffect } from "react";
import VideoGameList from './components/VideoGameList';
import CategoriesMenu from "./components/CategoriesMenu";
import Header from "./components/Header";
import PlatformsMenu from "./components/PlatformsMenu";

function App() {
  const [videogames, setVideogames] = useState([]);

    const [categories, setCategories] = useState([]);
    const [platforms, setPlatforms] = useState([]);

    const [filteredVideogames, setFilteredVideogames] = useState([]);

    const [checkedCategories, setCheckedCategories] = useState([]);
    const [checkedPlatforms, setCheckedPlatforms] = useState([]);

    useEffect(() => {
      const filteredList = videogames.filter(videogame => checkIfFilteredGame(videogame));

      setFilteredVideogames(filteredList);
    }, [checkedCategories, videogames]);

    useEffect(() => {
      const checkeds = categories.map(cat => {return {id: cat.id, checked: true}});
      setCheckedCategories(checkeds);
    }, [categories]);

    useEffect(() => {
      const checkeds = platforms.map(platform => { return {id: platform.id, checked: true}});
      setCheckedPlatforms(checkeds);
    }, [platforms]);

    const checkIfFilteredGame = videogame => {

      for (const category of videogame.categories) {
        const cat = checkedCategories.find(cat => cat.id == category);

        if (cat.checked)
          return true;
      }
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
        getVideoGames();
    }, []);

    const getVideoGames = async () => {
        const res = await fetch('http://localhost:8000/videogames');
        const data = await res.json();
        setVideogames(data);
    };

  return (
    <div>
      <Header title="Videogame List"/>
      <CategoriesMenu categories={categories} checkedCategories={checkedCategories} setCheckedCategories={setCheckedCategories}/>
      <PlatformsMenu platforms={platforms} checkedPlatforms={checkedPlatforms} setCheckedPlatforms={setCheckedPlatforms}/>
      <VideoGameList categories={categories} platforms={platforms} filteredVideogames={filteredVideogames}/>
    </div>
  );
}

export default App;
