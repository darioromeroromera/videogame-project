import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GameContext } from "./context/GameProvider";
import './componentsCSS/gamedetails.css';

const GameDetails = () => {

    const [details, setDetails] = useState(undefined);

    const {platforms, categories} = useContext(GameContext);

    const {id} = useParams();

    const getDetails = async () => {
        const data = await fetch(`http://localhost:8000/videogames/${id}`);
        const json = await data.json();
        setDetails(json);
    }

    useEffect(() => {
        getDetails();
    }, []);

    const showPlatforms = () => {
        if (details && platforms) {
            const arr = platforms.filter(platform => details.platforms.includes(platform.id)).map(platform => `${platform.name}, `);
            const str = arr.reduce((fullStr, actualStr) => fullStr + actualStr)
            return str.substring(0, str.length - 2);
        }
    };
    
    
    const showCategories = () => {
        if (details && categories) {
            const arr = categories.filter(category => details.categories.includes(category.id)).map(category => `${category.name}, `);
            const str = arr.reduce((fullStr, actualStr) => fullStr + actualStr)
            return str.substring(0, str.length - 2);
        }
    };

    if (details) {
        return (
            <div className="gamedetails__div">
                <p className="gamedetails__p">{details.name}</p>
                <h2 className="gamedetails__h2">Compañía</h2>
                <p className="gamedetails__p">{details.company}</p>
                <h2 className="gamedetails__h2">Fecha de lanzamiento</h2>
                <p className="gamedetails__p">{details.release_date}</p>
                <h2 className="gamedetails__h2">Categorías</h2>
                <p className="gamedetails__p">{showCategories()}</p>
                <h2 className="gamedetails__h2">Plataformas</h2>
                <p className="gamedetails__p">{showPlatforms()}</p>
                <h2 className="gamedetails__h2">Precio</h2>
                <p className="gamedetails__p">{details.price}€</p>
                <h2 className="gamedetails__h2">Descripción</h2>
                <p className="gamedetails__p">{details.description}</p>
                <img className="gamedetails__img" src={details.img_url}/>
            </div>
        );
    }
    
};

export default GameDetails;