import { Link } from "react-router-dom";
import {useAuth} from './context/AuthProvider';
import './componentsCSS/navigationmenu.css'

const NavigationMenu = () => {

    const {logout} = useAuth();

    return (
        <div className="navigationmenu__div">
            <nav className="navigationmenu__nav">
                <Link className="navigationmenu__link" to="/">Inicio</Link>
                <Link className="navigationmenu__link" to="/nuevo">Nuevo juego</Link>
                <Link className="navigationmenu__link" to="/about">Sobre nosotros</Link>
                <Link className="navigationmenu__link" to="/" onClick={e => {
                    e.preventDefault();
                    logout();
                }}>Cerrar sesión</Link>
            </nav>
        </div>
    )
};

export default NavigationMenu;