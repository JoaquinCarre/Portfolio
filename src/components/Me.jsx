import React from 'react';
import { useLanguage } from './context/LanguageContext';

const Me = ({ onMeChange }) => {
    const handleCloseMe = () => {
        onMeChange(false); // Llama a la función del padre para actualizar showMe
        };

    const { language } = useLanguage();
    return (
        <div className='about_me-block shadow'>
            { language === 'es' ? 
                <>
                    <p>Soy un <strong>apasionado de la tecnología</strong> y del cómo funcionan las "cosas"</p>
                    <br />
                    <p>Mi formación previa en una <strong>carrera de Ingeniería (Metalúrgica)</strong> me ha dado herramientas para <strong>diseñar, construir y optimizar sistemas y procesos lógicos</strong>. Sin embargo, decidí continuar mi formación académica estudiando <strong>Programación Web</strong>, carrera que me permitió aplicar estas herramientas de manera práctica.</p>
                    <br />
                    <p>Actualmente (2025) comencé a estudiar <strong>Ingeniería en Sistemas</strong> y estoy en <strong>búsqueda de mi primera experiencia laboral</strong> como programador.</p>
                </>
            :
                <>
                    <p>I am <strong>passionate about technology</strong> and how "things" work</p>
                    <br />
                    <p>My previous education in an <strong>engineering career (Metallurgical)</strong> has provided me with the tools to <strong>design, build, and optimize logical systems and processes</strong>. However, I decided to further my academic training by studying <strong>Web Development</strong>, a field that allowed me to apply these skills.</p>
                    <br />
                    <p>I am currently studying <strong>Systems Engineering</strong> (2025) and <strong>seeking for my first professional experience</strong> as a developer.</p>
                </>}
                <div className='x-icon'  onClick={handleCloseMe}>&times;</div>
        </div>
    );
};

export default Me;