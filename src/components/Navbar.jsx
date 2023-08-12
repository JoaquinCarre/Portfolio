import React from "react";

const Navbar = () => {

    return (
        <div className="navbar">
            <img src="/src/assets/logoJC.png" alt="Logo Portfolio" width={40} height={40} className="logo-navbar" />
            <ul className="navbar-menu">
                <li><a href="#about_me" className="text-white">Sobre mi</a></li>
                <li><a href="#projects" className="text-white">Proyectos</a></li>
                <li><a href="#skills" className="text-white">Habilidades</a></li>
                <li><a href="#contact" className="text-white">Contacto</a></li>
            </ul>
        </div>
    )
}

export default Navbar;