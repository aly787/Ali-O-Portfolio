import React, { useState } from 'react';

const CertificateGallery = ({ certificates }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? certificates.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === certificates.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="certificate-gallery">
      <div className="slide-container">
        {certificates.map((certificate, index) => (
          <div
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            key={index}
          >
            <img src={certificate.imageUrl} alt={certificate.title} />
            <h3>{certificate.title}</h3>
            <p>{certificate.description}</p>
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={handlePrevSlide}>&lt; Prev</button>
        <button onClick={handleNextSlide}>Next &gt;</button>
      </div>
    </div>
  );
};

export default CertificateGallery;
