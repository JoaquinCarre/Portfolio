import React from 'react';
import { useLanguage } from './context/LanguageContext';

const Me = () => {
    const { language } = useLanguage();
    return (
        <div className='about_me-block'>
            { language === 'es' ? 
                <>
                    <p>Soy un <strong>apasionado de la tecnología</strong> y del cómo funcionan las "cosas"</p>
                    <br />
                    <p>Mi formación previa en una <strong>carrera de Ingeniería</strong> me ha dado herramientas para <strong>diseñar, construir y optimizar sistemas y procesos lógicos</strong>. Sin embargo, decidí continuar mi formación académica estudiando <strong>Programación Web</strong>, carrera que me permitió aplicar estas herramientas de manera práctica.</p>
                    <br />
                    <p>Actualmente <strong>estoy en búsqueda de mi primera experiencia laboral</strong> en TU compañía.</p>
                </>
            :
                <>
                    <p>I am <strong>passionate about technology</strong> and how things work</p>
                    <br />
                    <p>My previous education in an <strong>engineering career</strong> has provided me with the tools to <strong>design, build, and optimize logical systems and processes</strong>. However, I decided to further my academic training by studying <strong>Web Development</strong>, a field that allowed me to apply these skills.</p>
                    <br />
                    <p>I am currently <strong>seeking my first professional experience</strong> at YOUR company.</p>
                </>}
        </div>
    );
};

export default Me;