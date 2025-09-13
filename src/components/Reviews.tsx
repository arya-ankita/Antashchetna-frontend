import React, { useRef } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Reviews.css";

const reviews = [
  { name: "Ankita Sharma", rating: 5, comment: "Amazing experience!" },
  { name: "Rahul Verma", rating: 4, comment: "Great place to relax." },
  { name: "Priya Singh", rating: 5, comment: "Highly recommended!" },
];

const ReviewSection: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="review-section">
      <h2>What Our Customers Say</h2>
      <div className="slider-container">
        <button className="slider-arrow left" onClick={() => sliderRef.current?.slickPrev()}>
          <FaChevronLeft />
        </button>

        <Slider ref={sliderRef} {...settings}>
          {reviews.map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-rating">
                {Array(r.rating).fill(0).map((_, j) => (
                  <FaStar key={j} className="star-icon" />
                ))}
              </div>
              <p className="review-comment">"{r.comment}"</p>
              <h4 className="review-name">- {r.name}</h4>
            </div>
          ))}
        </Slider>

        <button className="slider-arrow right" onClick={() => sliderRef.current?.slickNext()}>
          <FaChevronRight />
        </button>
      </div>

      <a
        href="https://www.google.com/maps/place/Antashchetna+A+Psychological+Care/@26.223458,78.1755674,17z/data=!4m16!1m7!3m6!1s0x3976c699da5b8d4b:0x7362d3c62df2088b!2sAntashchetna+A+Psychological+Care!8m2!3d26.2234172!4d78.175654!16s%2Fg%2F11g6xpyqq4!3m7!1s0x3976c699da5b8d4b:0x7362d3c62df2088b!8m2!3d26.2234172!4d78.175654!9m1!1b1!16s%2Fg%2F11g6xpyqq4?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="review-btn"
      >
        Write a Review on Google
      </a>
    </section>
  );
};

export default ReviewSection;
