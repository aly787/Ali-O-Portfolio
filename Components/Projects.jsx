import { useEffect, useState } from 'react';

const Projects = () => {
  const [header, setHeader] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [skills, setSkills] = useState('');
  const [imageIndex, setImageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const images = [
    'Project1.png',
    'Project2.png',
  ];

  const texts = [
    {
      header: 'Building a Prior for Hypothesis Testing using Conditional Sampling: ',
      paragraph: 'Explored Bayesian inference and conditional sampling techniques in computer science for constructing prior distributions in hypothesis testing. Investigated advantages over frequentist methods, with applications in parameter estimation, model fitting, and uncertainty quantification. Developed and implemented a comprehensive research methodology, demonstrating proficiency in statistical analysis and computational techniques. The project showcased the ability to apply advanced statistical methods to address real-world problems in computer science.',
      skills: 'Feature Selection  -  RFECV  -  Python  -  GitHub  -  NumpPy  -  Pandas',
    },
    {
      header: 'Bloom: ',
      paragraph: 'Bloom was the culmination of months of work, where we developed a website that utilized AI models to create unique solutions for startups and recommend the most suitable providers across the board.',
      skills: 'ReactJS  -  Django  -  HTML  -  CSS  -  JavaScript  -  GitHub'
    },
    {
      header: 'Personal Portfolio Website: ',
      paragraph: 'This website has been a project that I have dedicated myself to, throughout the past 3 months. I worked diligently to learn new skills and subsequently utilize them for this project, to showcase what I have learned and my dedication in this project',
      skills: 'ReactJS  -  Django  -  HTML  -  CSS  -  JavaScript  -  GitHub  -  NextJs  -  Vercel  -  TailwindCSS'
    },
  ];

  const handleNext = () => {
    const newIndex = (imageIndex + 1) % images.length;
    setImageIndex(newIndex);
  };

  useEffect(() => {
    const headerText = texts[imageIndex].header;
    const paragraphText = texts[imageIndex].paragraph;
    const skillsText = texts[imageIndex].skills

    let headerIndex = 0;
    let paragraphIndex = 0;
    let skillsIndex = 0;
    let typingTimer = null;

    const playTypingSound = () => {
      const typingSound = new Audio('/typing-sound.mp3');
      typingSound.play();
    };

    const startTyping = () => {
      setIsTyping(true);
      typingTimer = setInterval(() => {
        if (headerIndex < headerText.length) {
          setHeader(headerText.slice(0, headerIndex + 1));
          headerIndex++;
        } else if (paragraphIndex < paragraphText.length) {
          if (paragraphIndex === 0) {
            playTypingSound();
          }
          setParagraph(paragraphText.slice(0, paragraphIndex + 1));
          paragraphIndex++;
        } else if (skillsIndex < skillsText.length) {
          if (skillsIndex === 0) {
            playTypingSound();
          }
          setSkills(skillsText.slice(0, skillsIndex + 1));
          skillsIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typingTimer);
        }
      }, 20);
    };

    const handleScroll = () => {
      const projectsDiv = document.getElementById('projects');
      const projectsDivTop = projectsDiv.offsetTop;
      const projectsDivHeight = projectsDiv.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (
        scrollY > projectsDivTop - windowHeight + projectsDivHeight / 2 &&
        scrollY < projectsDivTop + projectsDivHeight
      ) {
        startTyping();
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(typingTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [imageIndex]);

  return (
    <div id="projects" className="flex h-screen">
      <div className="w-1/2 p-8 bg-[#020816] text-white flex items-center">
        <div style={{ color: 'white' }} className="mb-4">
          <h2
            style={{
              color: '#FFF8D8',
              fontFamily: 'Montserrat',
              fontWeight: '700',
              fontSize: '30px',
            }}
          >
            {'>'}
            {isTyping ? header : texts[imageIndex].header}
          </h2>
          <p
            style={{
              textAlign: 'left',
              color: 'grey',
              fontWeight: '200',
              fontSize: '18px',
              wordWrap: 'break-word',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 100,
            }}
          >
            {isTyping ? paragraph : texts[imageIndex].paragraph}
          </p>
          <h2
            style={{
              textAlign: 'left',
              color: 'grey',
              fontWeight: '200',
              fontSize: '18px',
              wordWrap: 'break-word',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 100,
            }}
          >
            {isTyping ? skills : texts[imageIndex].skills}
          </h2>
        </div>
      </div>
      <div className="w-1/2 p-8 relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src={images[imageIndex]}
            alt="Image"
            className="h-full w-full object-cover mb-4"
          />
          <button
            onClick={handleNext}
            className="absolute bottom-10 right-10 bg-white hover:bg-[#020816] text-[#8c6739] font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;