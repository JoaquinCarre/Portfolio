import React from 'react';

const VideoBackground = ({ videoUrl }) => {
    return (
        <>
            <video muted autoPlay loop>
              <source src={videoUrl} type="video/mp4" />
            </video>
            <div className="video-layer"></div>
        </>
    );
};

export default VideoBackground;