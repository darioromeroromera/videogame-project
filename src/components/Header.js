import './componentsCSS/header.css';

const Header = ({title}) => {
    return (
        <div className='header__div'>
            <h1 className='header__h1'>{title}</h1>
        </div>
    );
};

export default Header;