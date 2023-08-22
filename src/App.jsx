import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import GridItem from './components/GridItem';
import TitleSection from './components/TitleSection';
import VideoBackground from './components/VideoBackground';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className='grid-components'>
          <section className='mainsection mainsection1' id='about_me'>
            <GridItem section="about me" gridCanva="grid-block" personalImage="./src/assets/me-nobg.png" backgroundColor="#05006B" />
            <GridItem section="about me" gridCanva="grid-block" backgroundColor="#05006B" me
              texts={["Hola, soy"]}
              textsBold={["Joaquín Carré"]}
              icon={<span>👋</span>} />
            <GridItem section="about me" gridCanva="grid-block" backgroundColor="#05006B" career
              textsBold={["Programador Web", "Full Stack", "JavaScript"]}
              icon={<span>👨‍💻</span>} />
            <VideoBackground videoUrl="./src/assets/video/blue-bg.mp4" />
          </section>
          <section className="mainsection" id='projects'>
            <TitleSection backgroundColor="#3d3c3b"
              icon={<span>📁</span>}
              title="Mis Proyectos" />
            <GridItem section="projects" gridCanva="grid-block span-2" backgroundColor="#7c8071" texts={["Proyectos"]} />
          </section>
          <section className="mainsection" id='skills'>
            <GridItem section="skills" gridCanva="grid-block span-2" backgroundColor="#281DEF"
              texts={["Lista de habilidades"]} />
            <TitleSection backgroundColor="#231AAB"
              title={["Mis habilidades tecnológicas"]}
              icon={<span>💻</span>} />
          </section>
          <section className="mainsection" id='contact'>
            <TitleSection backgroundColor="#322F6B"
              title={["Contacto"]}
              icon={<span>📪</span>} /> {/* IDEA ICONO FORMULARIO: Primero aparece el icono 📪, al escribir dentro se abre el buzon 📭, si borra todo el contenido se cierra 📪, si envia el formulario se sube la palanca en buzon y deja una carta 📬, seguidamente se cierra al cabo de 1 segundo con la palanca arriba 📫, si vuelve a escribir el formulario este baja la palanca y se abre 📭 y vuelve a iniciar toda la secuencia. */}
            <GridItem section="contact" gridCanva="grid-block span-2" backgroundColor="#5047EE"
              texts={["Formulario + links RRSS"]}
              icon={<span>👋</span>} />
          </section>
        </div>
      </main>
    </>
  )
}

/* ICONOS https://publydea.com/blog/emoticonos-para-copiar-y-pegar https://iconos8.es/icons*/

export default App
