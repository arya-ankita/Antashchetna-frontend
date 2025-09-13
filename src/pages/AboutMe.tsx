import React from 'react';
import ImageGallery from '../components/ImageGallery';

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-page">
      <ImageGallery />
      <h1>About Me</h1>
      <p>This is the about me page.</p>
    </div>
  );
};

export default AboutMe;
