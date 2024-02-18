import VideoGame from "./VideoGame";
import './componentsCSS/videogamelist.css';

const VideoGameList = ({categories, platforms, filteredVideogames, details, setDetails, getVideoGames}) => {
    return (
        <div className="videogamelist__div">
            {
                filteredVideogames.map(videogame => <VideoGame getVideoGames={getVideoGames} details={details} setDetails={setDetails} key={videogame.id} videogame={videogame} categories={categories} platforms={platforms}/>)
            }
        </div>
    );
};

export default VideoGameList;