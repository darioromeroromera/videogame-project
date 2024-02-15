import { useEffect, useState } from 'react';
import './componentsCSS/videogame.css';

const VideoGame = ({videogame, categories, platforms}) => {
    
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
    return (
        <div className="videogame__div">
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
        </div>
    )
};
export default VideoGame;