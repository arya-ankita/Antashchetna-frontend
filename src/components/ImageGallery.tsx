import { useEffect } from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  useEffect(() => {
    const images = document.querySelectorAll('.img');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.3 }
    );
    images.forEach((img) => observer.observe(img));
    return () => {
      images.forEach((img) => observer.unobserve(img));
    };
  }, []);

  return (
    <div className="section-wrapper">
      <div className="left-images">
        <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=400&q=80" alt="Fashion 1" className="img left-img large" />
        <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=400&q=80" alt="Fashion 2" className="img left-img small" />
      </div>
      <div className="right-content">
        <h2>Gallery Title</h2>
        <p>
          Showcasing the latest fashion trends with engaging animations. 
          Discover the best styles and find inspiration for your next look.
        </p>
        <button className="gallery-btn">Explore Now</button>
      </div>
    </div>
  );
};

export default ImageGallery;
