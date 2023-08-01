import React from "react";

const ProjectCard = ( image, title, description, link ) => {
    const linkButton = (url) => {
        window.location.href = url;
    };

    return (
        <>
        <div className="project-card" style={{backgroundImage: `url(${ image })`, backgroundSize: 'cover', backgroundPosition: 'center center',}}>
            <div className="cover-project-card"></div>
            <h2 className="title-project-card">{ title }</h2>
            <p className="description-project-card">{ description }</p>
            <button className="button-project-card" onClick={ () => linkButton({ link }) }>Visitar Web</button>
        </div>
        </>
    )
}

export default ProjectCard;