import React from "react";
import { useLanguage } from './context/LanguageContext';

const Navbar = () => {
    const { language, toggleLanguageToEs, toggleLanguageToEn } = useLanguage();

    return (
        <div className="navbar">
            <img src="/src/assets/logoJC.png" alt="Logo Portfolio" width={45} className="logo-navbar" />
            <ul className="navbar-menu">
                <li><a href="#about_me" className="text-white">{ language === 'es' ? 'Sobre mi' : 'About Me'}</a></li>
                <li><a href="#projects" className="text-white">{ language === 'es' ? 'Proyectos' : 'Projects'}</a></li>
                <li><a href="#skills" className="text-white">{ language === 'es' ? 'Habilidades' : 'Skills'}</a></li>
                <li><a href="#contact" className="text-white">{ language === 'es' ? 'Contacto' : 'Contact'}</a></li>
            </ul>
            <div className="languages">
                <button className="button-lang-es" onClick={toggleLanguageToEs}></button>
                <button className="button-lang-en" onClick={toggleLanguageToEn}></button>
            </div>
        </div>
    )
}

export default Navbar;