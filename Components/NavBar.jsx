import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const NavBar = () => {
    const scrollToComponent = () => {
        scroll.scrollToComponent(document.getElementById('about'), {
          duration: 500,
          offset: -70,
          smooth: true
        });
      };
  return (
    <div>
        <nav
        style={{
            backgroundColor: 'rgba(0, 0, 0, 0)', // Semi-transparent background color
            backdropFilter: 'blur(20px)', // Apply the blur effect
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
        }}
        >
        <button
            style={{
            color: 'white',
            margin: '0 20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'color 0.3s ease',
            fontFamily: "Montserrat"

            }}
            onMouseEnter={(e) => {
            e.target.style.color = '#C8A579';
            }}
            onMouseLeave={(e) => {
            e.target.style.color = 'white';
            }}
        >
            Home
        </button>
        <button
            style={{
            color: 'white',
            margin: '0 20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'color 0.3s ease',
            fontFamily: "Montserrat"

            }}
            onMouseEnter={(e) => {
            e.target.style.color = '#C8A579';
            }}
            onMouseLeave={(e) => {
            e.target.style.color = 'white';
            }}
        >
            About
        </button>
        <button
            style={{
            color: 'white',
            margin: '0 20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'color 0.3s ease',
            fontFamily: "Montserrat"

            }}
            onMouseEnter={(e) => {
            e.target.style.color = '#C8A579';
            }}
            onMouseLeave={(e) => {
            e.target.style.color = 'white';
            }}
        >
            Resume
        </button>
        <button
            style={{
            color: 'white',
            margin: '0 20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'color 0.3s ease',
            fontFamily: "Montserrat"

            }}
            onMouseEnter={(e) => {
            e.target.style.color = '#C8A579';
            }}
            onMouseLeave={(e) => {
            e.target.style.color = 'white';
            }}
        >
            Projects
        </button>
        <button
            style={{
            color: 'white',
            margin: '0 20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'color 0.3s ease',
            fontFamily: "Montserrat"
            }}
            onMouseEnter={(e) => {
            e.target.style.color = '#C8A579';
            }}
            onMouseLeave={(e) => {
            e.target.style.color = 'white';
            }}
        >
            Contact
        </button>
        <hr style={{ borderTop: '10px solid #000', margin: '10px 0', opacity: '50%' }} />
        </nav>
        <hr style={{ borderTop: '1px solid #C8A579', margin: '0px 0', opacity: '50%' }} />
    </div>    
  );
};

export default NavBar;
