import { Link } from "react-router-dom";
import './header.css';
import InputSearch from "../Search/InputSearch";

export default function Header() {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <Link to="/react-frontend/">Главная</Link>
                <Link to="/react-frontend/blog">Блог</Link>
                <Link to="/react-frontend/contact">Контакты</Link>
                <Link to="/react-frontend/about">О компании</Link>
                <Link to="/react-frontend/components">Компоненты</Link>
                <Link to="/react-frontend/products">Продукты</Link>
                <Link to="/react-frontend/registration">Регистрация</Link>
            </nav>

            <InputSearch />
        </header>
    )
}
