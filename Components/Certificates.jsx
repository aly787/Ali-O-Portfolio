import { useState, useEffect, useRef } from 'react';

const Certificates = () => {
  const certificates = [
    {
      name: 'Certificate of Achievement in Web Development',
      time: 'May 2021',
      place: 'Udemy'
    },
    {
      name: 'React Certification',
      time: 'July 2021',
      place: 'Coursera'
    },
    {
      name: 'Certificate of Completion in JavaScript',
      time: 'August 2021',
      place: 'Codecademy'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [certificates.length]);

  const handlePausePlayClick = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };

  const handleDotClick = index => {
    setCurrentIndex(index);
  };

  return (
    <div className="certificates">
      <div className="certificates__container">
        <div
          className="certificates__slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {certificates.map((certificate, index) => (
            <div className="certificates__card" key={index}>
              <h3 className="certificates__title">{certificate.name}</h3>
              <p className="certificates__time">{certificate.time}</p>
              <p className="certificates__place">{certificate.place}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="certificates__nav">
        <button
          className="certificates__pause-play"
          onClick={handlePausePlayClick}
        >
          {isPlaying ? (
            <i className="fas fa-pause"></i>
          ) : (
            <i className="fas fa-play"></i>
          )}
        </button>
        <div className="certificates__dots">
          {certificates.map((_, index) => (
            <button
              key={index}
              className={`certificates__dot ${
                index === currentIndex ? 'active' : ''
              }`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;