import './App.css';
import { useLanguage } from './components/context/LanguageContext';
import Navbar from './components/Navbar';
import GridItem from './components/GridItem';
import TitleSection from './components/TitleSection';
import VideoBackground from './components/VideoBackground';
/* import Footer from './components/Footer'; */
import menobg from './assets/me-nobg.png';
import video from './assets/video/blue-bg.mp4';

function App() {
  const { language } = useLanguage();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className='grid-components'>
          <section className='mainsection mainsection1' id='about_me'>
            <GridItem section="about me" gridCanva="grid-block" personalImage={menobg} backgroundColor="#050045" />
            <GridItem section="about me" gridCanva="grid-block" backgroundColor="#050045" me
              texts={language === 'es' ? ["Hola, soy"] : ["Hi, I'm"] }
              textsBold={["Joaquín Carré"]}
              icon={<span>👋</span>} />
            <GridItem section="about me" gridCanva="grid-block" backgroundColor="#050045" career
              textsBold={language === 'es' ? ["Programador Web", "Full Stack", "JavaScript"] : ["Full Stack", "Web Developer", "JavaScript"]}
              icon={<span>👨‍💻</span>} />
            <VideoBackground videoUrl={video} />
          </section>
          <section className="mainsection mainsection2" id='projects'>
            <TitleSection backgroundColor="#3d3c3b"
              icon={<span>📁</span>}
              title={language === 'es' ? 'Mis Proyectos' : 'My Projects' } />
            <GridItem section="projects" gridCanva="grid-block span-2" backgroundColor="#7c8071" texts={["Proyectos"]} />
          </section>
          <section className="mainsection mainsection2" id='skills'>
            <TitleSection backgroundColor="#231AAB"
              title={language === 'es' ? 'Mis Habilidades Tecnológicas' : 'My Tech Skills' }
              icon={<span>💻</span>} />
            <GridItem section="skills" gridCanva="grid-block span-2" backgroundColor="#281DEF"
              texts={["Lista de habilidades"]} />
          </section>
          <section className="mainsection mainsection2" id='contact'>
            <TitleSection backgroundColor="#322F6B"
              title={language === 'es' ? 'Contacto' : 'Contact' }
              icon={<span>📪</span>} /> {/* IDEA ICONO FORMULARIO: Primero aparece el icono 📪, al escribir dentro se abre el buzon 📭, si borra todo el contenido se cierra 📪, si envia el formulario se sube la palanca en buzon y deja una carta 📬, seguidamente se cierra al cabo de 1 segundo con la palanca arriba 📫, si vuelve a escribir el formulario este baja la palanca y se abre 📭 y vuelve a iniciar toda la secuencia. */}
            <GridItem section="contact" gridCanva="grid-block span-2" backgroundColor="#5047EE"
              texts={["Formulario + links RRSS"]}
              icon={<span>👋</span>} />
          </section>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  )
}

/* ICONOS https://publydea.com/blog/emoticonos-para-copiar-y-pegar https://iconos8.es/icons*/

export default App
