import React from "react";

const Navbar = () => {

    return (
        <div className="navbar">
            <img src="/src/assets/logoJC.png" alt="Logo Portfolio" width={40} height={40} className="logo-navbar" />
            <ul className="navbar-menu">
                <li>Inicio</li>
                <li>Sobre mi</li>
                <li>Proyectos</li>
                <li>Skills</li>
                <li>Contacto</li>
            </ul>
        </div>
    )
}

export default Navbar;