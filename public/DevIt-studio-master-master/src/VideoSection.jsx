// VideoSection.jsx
import React from 'react';
import fondoVideo from '../src/assets/fondo.mp4';
import './VideoSection.css'; // Import a separate CSS file for styling

const VideoSection = () => {
  return (
    <div className="video-section">
      {/* Your video component goes here */}
      <video
        width="100%"
        height="100%"
        controls
        autoPlay
        loop
        muted
        style={{ borderRadius: '15px' }}
      >
        <source src={fondoVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;
