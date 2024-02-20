import './componentsCSS/modal.css'

const Modal = ({details, setDetails, categories, platforms}) => {
    
    const showPlatforms = () => {
        if (details.platforms) {
            const arr = platforms.filter(platform => details.platforms.includes(platform.id)).map(platform => `${platform.name}, `);
            const str = arr.reduce((fullStr, actualStr) => fullStr + actualStr)
            return str.substring(0, str.length - 2);
        }
    };
    
    
    const showCategories = () => {
        if (details.categories) {
            const arr = categories.filter(category => details.categories.includes(category.id)).map(category => `${category.name}, `);
            const str = arr.reduce((fullStr, actualStr) => fullStr + actualStr)
            return str.substring(0, str.length - 2);
        }
    };

    return (
        <div className="modal__main_div" style={{display: details.visibility ? "block" : "none"}}>
            <div className='modal__content_div'>
                <div className='modal__written'>
                    <p className='videogame__h1'>{details.name}</p>
                    <h2 className='videogame__h2'>Compañía</h2>
                    <p className='videogame__element'>{details.company}</p>
                    <h2 className='videogame__h2'>Fecha de lanzamiento</h2>
                    <p className='videogame__element'>{details.release_date}</p>
                    <h2 className='videogame__h2'>Categorías</h2>
                    <p className='videogame__element'>{showCategories()}</p>
                    <h2 className='videogame__h2'>Plataformas</h2>
                    <p className='videogame__element'>{showPlatforms()}</p>
                    <h2 className='videogame__h2'>Precio</h2>
                    <p className='videogame__element'>{details.price}€</p>
                    <h2 className='videogame__h2'>Descripción</h2>
                    <p>{details.description}</p>
                    <button className='modal__btn' onClick={() => setDetails({visibility: false})}>Cerrar Detalles</button>
                </div>
                <div className='modal__img_div'>
                    <img className='modal__img' src={details.img}/>
                </div>
            </div>
        </div>
    )
};

export default Modal;