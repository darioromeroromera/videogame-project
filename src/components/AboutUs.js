import './componentsCSS/aboutus.css';

const AboutUs = () => {
    return(
        <div className="aboutus_div">
            <h1 className="aboutus__h1">Descripción de la aplicación</h1>
            <p className="aboutus__p">Esta es una aplicación web de videojuegos hecha en React.</p>
            <h2 className="aboutus__h2">Autor:</h2>
            <p className="aboutus__p">Darío Romero Romera.</p>
        </div>
    )
};

export default AboutUs;