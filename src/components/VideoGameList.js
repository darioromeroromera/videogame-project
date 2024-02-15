import VideoGame from "./VideoGame";
import './componentsCSS/videogamelist.css';

const VideoGameList = ({categories, platforms, filteredVideogames}) => {
    return (
        <div className="videogamelist__div">
            {
                filteredVideogames.map(videogame => <VideoGame key={videogame.id} videogame={videogame} categories={categories} platforms={platforms}/>)
            }
        </div>
    );
};

export default VideoGameList;