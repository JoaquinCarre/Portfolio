import React from "react";
import { useLanguage } from "./context/LanguageContext";
import iconhtml from '../assets/icon-html.png';
import iconcss from '../assets/icon-css.png';
import iconsass from '../assets/icon-sass.png';
import iconbootstrap from '../assets/icon-bootstrap.png';
import iconjs from '../assets/icon-js.png';
import iconreact from '../assets/icon-reactjs.png';
import iconnpm from '../assets/icon-npm.png';
import iconexpress from '../assets/icon-expressjs.png';
import iconnode from '../assets/icon-nodejs.png';
import iconsql from '../assets/icon-sql.png';
import iconmongodb from '../assets/icon-mongodb.png';
import iconjwt from '../assets/icon-jwt.png';
import iconfl0 from '../assets/icon-fl0.webp';
import icongithub from '../assets/icon-github.png';
import iconphsop from '../assets/icon-photoshop.png';

const SkillsCards = ({ skill }) => {
    const { language } = useLanguage();

    if (skill === "front-end") {
        return (
            <div className="block-skill-card">
                <div className="separator-border-title separator1"></div>
                <h3 className="title-skill-card">Front-End</h3>
                <div className="icons-skill-card">
                    <img src={iconhtml} className="icon-tech-skill" alt="Icono HTML"/>
                    <img src={iconcss} className="icon-tech-skill" alt="Icono CSS"/>
                    <img src={iconsass} className="icon-tech-skill" alt="Icono SASS"/>
                    <img src={iconbootstrap} className="icon-tech-skill" alt="Icono Bootstrap"/>
                    <img src={iconjs} className="icon-tech-skill" alt="Icono JavaScript"/>
                    <img src={iconreact} className="icon-tech-skill" alt="Icono ReactJS"/>
                    <img src={iconnpm} className="icon-tech-skill" alt="Icono npm"/>
                </div>
            </div>
        )
    }
    
    if (skill === "back-end") {
        return (
            <div className="block-skill-card">
                <div className="separator-border-title separator2"></div>
                <h3 className="title-skill-card">Back-End</h3>
                <div className="icons-skill-card">
                    <img src={iconexpress} alt="Icono ExpressJS" className="icon-tech-skill" />
                    <img src={iconnode} alt="Icono NodeJS" className="icon-tech-skill" />
                    <img src={iconsql} alt="Icono SQL" className="icon-tech-skill" />
                    <img src={iconmongodb} alt="Icono MongoDB" className="icon-tech-skill" />
                    <img src={iconjwt} alt="Icono JWT" className="icon-tech-skill" />
                    <svg aria-label="Railway Logo" className="icon-tech-skill" viewBox="0 0 1024 1024" fill="none"><path d="M4.756 438.175A520.713 520.713 0 0 0 0 489.735h777.799c-2.716-5.306-6.365-10.09-10.045-14.772-132.97-171.791-204.498-156.896-306.819-161.26-34.114-1.403-57.249-1.967-193.037-1.967-72.677 0-151.688.185-228.628.39-9.96 26.884-19.566 52.942-24.243 74.14h398.571v51.909H4.756ZM783.93 541.696H.399c.82 13.851 2.112 27.517 3.978 40.999h723.39c32.248 0 50.299-18.297 56.162-40.999ZM45.017 724.306S164.941 1018.77 511.46 1024c207.112 0 385.071-123.006 465.907-299.694H45.017Z" fill="#000"></path><path d="M511.454 0C319.953 0 153.311 105.16 65.31 260.612c68.771-.144 202.704-.226 202.704-.226h.031v-.051c158.309 0 164.193.707 195.118 1.998l19.149.706c66.7 2.224 148.683 9.384 213.19 58.19 35.015 26.471 85.571 84.896 115.708 126.52 27.861 38.499 35.876 82.756 16.933 125.158-17.436 38.97-54.952 62.215-100.383 62.215H16.69s4.233 17.944 10.58 37.751h970.632A510.385 510.385 0 0 0 1024 512.218C1024.01 229.355 794.532 0 511.454 0Z" fill="#000"></path></svg>
                    <img src={iconfl0} alt="Icono Fl0" className="icon-tech-skill" />
                </div>
            </div>
        )
    }
    
    if (skill === "other") {
        return (
            <div className="block-skill-card">
                <div className={language === 'es' ? "separator-border-title separator3" : "separator-border-title separator4"}></div>
                <h3 className="title-skill-card">{language === 'es' ? 'Otras Habilidades' : 'Other Skills' }</h3>
                <div className="icons-skill-card">
                    <img src={icongithub} alt="Icono GitHub" className="icon-tech-skill"/>
                    <img src={iconphsop} alt="Icono Photoshop" className="icon-tech-skill"/>
                </div>
            </div>
        )
    }    
}

export default SkillsCards;