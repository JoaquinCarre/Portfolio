import React from "react";

const ProjectCard = ({ image, title, description, link }) => {
    return (
        <div className="project-card" style={{backgroundImage: `url(${ image })`, backgroundSize: 'cover', backgroundPosition: 'center center',}}>
            <div className="cover-project-card"></div>
            <h2 className="title-project-card">{ title }</h2>
            <p className="description-project-card">{ description }</p>
            <a href={ link }><button className="button-project-card">Visitar Web</button></a>
        </div>
    )
}

export default ProjectCard;