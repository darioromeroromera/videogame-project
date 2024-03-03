import { useContext } from "react";
import VideoGame from "./VideoGame";
import './componentsCSS/videogamelist.css';
import { GameContext } from "./context/GameProvider";

const VideoGameList = () => {
    const {categories, platforms, filteredVideogames, details, setDetails, getVideoGames} = useContext(GameContext);

    return (
        <div className="videogamelist__div">
            {
                filteredVideogames.map(videogame => <VideoGame getVideoGames={getVideoGames} details={details} setDetails={setDetails} key={videogame.id} videogame={videogame} categories={categories} platforms={platforms}/>)
            }
        </div>
    );
};

export default VideoGameList;