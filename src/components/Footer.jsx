import React from 'react'
import { useEffect, useState } from "react"
import { useLanguage } from './context/LanguageContext';

const Footer = () => {
    const [visible, setVisible] = useState(false);
    const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Detectar si llegamos al fondo de la página
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <footer className={`${visible ? "visible" : ""}`}>
            <div className='footer-content'>
                <p>© 2025 Joaquín Carré</p><p>v1.0.0 {language === 'es' ? 'actualizado al 20/08/2025' : 'updated on 08/20/2025'}</p>
            </div>
        </footer>
    )
}

export default Footer