import { useContext, useEffect, useState } from 'react';
import './componentsCSS/videogame.css';
import { GameContext } from './context/GameProvider';
import { useNavigate } from 'react-router-dom';

const VideoGame = ({videogame}) => {

    const {categories, platforms, details, setDetails, getVideoGames} = useContext(GameContext);

    const navigate = useNavigate();

    const showDescription = () => {
        if (videogame.description.length <= 100) {
            return videogame.description;
        } else {
            return videogame.description.substring(0, 100) + '...';
        }
    };
    
    const showPlatforms = () => {
        const arr = platforms.filter(platform => videogame.platforms.includes(platform.id)).map(platform => `${platform.name}, `);
        const str = arr.reduce((fullStr, actualStr) => fullStr + actualStr)
        return str.substring(0, str.length - 2);
    };
    
    
    const showCategories = () => {
        const arr = categories.filter(category => videogame.categories.includes(category.id)).map(category => `${category.name}, `);
        const str = arr.reduce((fullStr, actualStr) => fullStr + actualStr)
        return str.substring(0, str.length - 2);
    };

    const deleteGame = async () => {
        try {
            const res = await fetch('http://localhost:8000/videogames/' + videogame.id, {
                method: 'DELETE'
            });

            if (res.status !== 200) {
                alert('Error al intentar borrar el videojuego');
            } else {
                getVideoGames();
            }
        } catch (error) {
            alert('Error al intentar borrar el videojuego');
        }
    }

    return (
        <div className="videogame__div" onClick={(e) => {
            if (e.target.className !== 'videogame__btn_danger' && e.target.className !== 'videogame__btn_primary')
                if (!details.visibility)
                    setDetails({visibility: true, name: videogame.name, categories: videogame.categories,
                        platforms: videogame.platforms, price: videogame.price, description: videogame.description, 
                        img: videogame.img_url, company: videogame.company, release_date: videogame.release_date});
        }}>
            <img className='videogame__element videogame__img' src={videogame.img_url}/>
            <p className='videogame__h1'>{videogame.name}</p>
            <h2 className='videogame__h2'>Categorías</h2>
            <p className='videogame__element'>{showCategories()}</p>
            <h2 className='videogame__h2'>Plataformas</h2>
            <p className='videogame__element'>{showPlatforms()}</p>
            <h2 className='videogame__h2'>Precio</h2>
            <p className='videogame__element'>{videogame.price}€</p>
            <h2 className='videogame__h2'>Descripción</h2>
            <p className='videogame__element'>{showDescription()}</p>

            <button className='videogame__btn_danger' onClick={deleteGame}>Borrar</button>

            <button className='videogame__btn_primary' onClick={() => navigate(`/game/${videogame.id}`)}>Ver detalles en otra página</button>

        </div>
    )
};
export default VideoGame;