import React from "react";

const TitleSection = ({ backgroundColor, icon, title }) => {
    return (
        <div className="grid-block" style={{ backgroundColor }}>
        <div className="block-content">
            <div className="block-icon">{icon}</div>
            <div className="block-text">
            <p>{title}</p>
            </div>
        </div>
        </div>
    );
}

export default TitleSection;