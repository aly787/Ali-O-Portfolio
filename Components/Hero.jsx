import React from 'react';
import NavBar from '../Components/NavBar';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const handleEmailClick = () => {
    const emailAddress = 'ali.r.ottoman@gmail.com';
    const subject = 'Inquiry';
    const body = 'Hi, Ask away.';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink);
  };

  return (
    <div
      style={{
        backgroundImage: "url('/Hero section background2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Set minHeight to 100vh to cover the whole viewport height
        display: 'flex',
        flexDirection: 'column',
        backdropFilter: 'blur(100%)',
      }}
    >
      <NavBar style={{ backgroundColor: '' }} />

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ color: '#FFF8D8', fontFamily: "Montserrat", fontWeight: "800", fontSize: '120px', marginBottom: '0px' }}>
          ALI OTTOMAN
        </h1>
        <p style={{ color: 'white', fontFamily: "Montserrat", fontWeight: "400", fontSize: '20px', marginBottom: '20px', textAlign: 'center', wordWrap: 'break-word', width:"70%" }}>
        Artificial Intelligence Graduate | Baseball Enthusiast
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="https://www.linkedin.com/in/ali-r-ottoman" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="white" style={{ marginRight: '30px' }} />
          </a>

          <FaEnvelope
            size={30}
            color="white"
            onClick={handleEmailClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
