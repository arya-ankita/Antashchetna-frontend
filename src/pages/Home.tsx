import React from 'react';
import Hero from '../components/Hero';
import ImageGallery from '../components/ImageGallery';
import ReviewSlider from '../components/Reviews';
import './Home.css'; // Make sure to create this for styling

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      <div className="gallery-with-text">
        <ImageGallery />
        {/* <div className="doctor-text">
          <h3>About Dr. Sanjay Saxena</h3>
          <p>
            With a PhD in Psychology and a passion for holistic healing,<br />
            Dr. Sanjay Saxena combines modern psychological techniques with traditional therapies<br />
            like Acupressure, Color Therapy, and Music Therapy.<br />
            By blending science with natural remedies, he helps you achieve mental clarity,<br />
            emotional balance, and overall well-being.
          </p>
        </div> */}
      </div>

      <ReviewSlider />
    </>
  );
};

export default Home;
