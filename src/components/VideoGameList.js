import { useContext } from "react";
import VideoGame from "./VideoGame";
import './componentsCSS/videogamelist.css';
import { GameContext } from "./context/GameProvider";

const VideoGameList = () => {
    const {filteredVideogames} = useContext(GameContext);

    return (
        <div className="videogamelist__div">
            {
                filteredVideogames.map(videogame => <VideoGame key={videogame.id} videogame={videogame}/>)
            }
        </div>
    );
};

export default VideoGameList;