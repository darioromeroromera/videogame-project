import './componentsCSS/newGameForm.css';

import { useState, useEffect, useRef, useContext } from "react";
import { GameContext } from './context/GameProvider';

const NewGameForm = () => {

    const {getVideoGames, categories, platforms} = useContext(GameContext);

    const [errors, setErrors] = useState({hasErrors: false, errors: []});

    const titleRef = useRef();

    const companyRef = useRef();
    
    const dateRef = useRef();
    
    const catRef = useRef();

    const platRef = useRef();

    const priceRef = useRef();

    const descRef = useRef();

    const urlRef = useRef();

    const uploadVideogame = async () => {
        try {
            const response = await fetch("http://localhost:8000/videogames", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({

                    name: titleRef.current.value,
                    company: companyRef.current.value,
                    categories: [Number(catRef.current.value)],
                    platforms: [Number(platRef.current.value)],
                    price: Number(priceRef.current.value),
                    description: descRef.current.value,
                    img_url: urlRef.current.value
                })
            });

            getVideoGames();
        } catch(err) {
            alert(err);
            alert("Ha habido un error intentando subir el videojuego");
        }
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        let hasErrors = false;

        const errors = [];

        if (titleRef.current.value === "") {
            hasErrors = true;
            errors.push("El título no puede estar vacío");
        }

        if (companyRef.current.value === "") {
            hasErrors = true;
            errors.push("El nombre de la compañía no puede estar vacío");
        }

        if (!/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(dateRef.current.value)) {
            hasErrors = true;
            errors.push("Formato de fecha incorrecto");
        }

        if (priceRef.current.value === '' || isNaN(priceRef.current.value)) {
            hasErrors = true;
            errors.push("El campo precio debe ser un número");
        }

        if (descRef.current.value === "") {
            hasErrors = true;
            errors.push("La descripción no puede estar vacía");
        }

        if (urlRef.current.value === "") {
            hasErrors = true;
            errors.push("La url no puede estar vacía");
        }

        if (!hasErrors) {
            uploadVideogame();
        }

        setErrors({hasErrors, errors});

    }

    

    return (
        <div>
            <h1 className='newGameForm__h1'>Añadir videojuego</h1>
            <form className='newGameForm__main_div' onSubmit={handleOnSubmit}>
                <div>
                    <label htmlFor="name">Título del juego</label>
                    <input className="newGameForm__dataIn" name="name" id="name" ref={titleRef}/>
                </div>

                <div>
                    <label htmlFor="company">Compañía</label>
                    <input className="newGameForm__dataIn" name="company" id="company" ref={companyRef}/>
                </div>

                <div>
                    <label htmlFor="release_date">Fecha de lanzamiento</label>
                    <input className="newGameForm__dataIn" name="release_date" id="release_date" ref={dateRef}/>
                </div>

                <div>
                    <label htmlFor="category">Categoría</label>
                    <select className="newGameForm__dataIn" name="category" ref={catRef}>
                        {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="platforms">Plataforma</label>
                    <select className="newGameForm__dataIn" name="platform" ref={platRef}>
                        {platforms.map(platform => <option key={platform.id} value={platform.id}>{platform.name}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="price">Precio</label>
                    <input className="newGameForm__dataIn" name="name" id="name" ref={priceRef}/>
                </div>
                <div>
                    <label htmlFor="description">Descripción</label>
                    <input className="newGameForm__dataIn" name="description" id="description" ref={descRef}/>
                </div>

                <div>
                    <label htmlFor="img_url">URL de la imagen</label>
                    <input className="newGameForm__dataIn" name="img_url" id="img_url" ref={urlRef}/>
                </div>

                <button className='newGameForm__btn'>Añadir</button>

                {errors.hasErrors ? 
                    <div className="newGameForm__error_div">
                        {errors.errors.map(error => <p>{error}</p>)}
                    </div>
                : ""}
            </form>
        </div>
    );
}
                

export default NewGameForm;