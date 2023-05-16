
import {useState} from 'react';
import Hero from '../Components/Hero.jsx';
import About from '../Components/About';
import Projects from "../Components/Projects";
import ExperienceTimeline from "../Components/Experience";
import Contact from '../Components/Contact';
import Education from '../Components/Education';

const education = [
  {
    degree: "Bachelor of Science in Artificial Intelligence and Computer Science",
    school: "University of Birmingham",
    startDate: "Sep 2020",
    endDate: "Jun 2023",
  },
  {
    degree: "Bachelor of Arts in Computer Science with a major in Business Management",
    school: "University of Toronto",
    startDate: "Sep 2019",
    endDate: "Jun 2020",
    
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div style={{backgroundColor:"#020816"}}>
      <Hero id="hero"/>
      <hr style={{ borderTop: '1px solid #C8A579', margin: '0px 0', opacity: '50%' }} />
      <About id="about"/>
      <hr style={{ borderTop: '1px solid #C8A579', margin: '0px 0', opacity: '50%' }} />
      <ExperienceTimeline id="experience" />
      <hr style={{ borderTop: '1px solid #C8A579', margin: '0px 0', opacity: '50%' , paddingTop:"20px"}} />
      <Education education={education} id="education"/>
      <hr style={{ borderTop: '1px solid #C8A579', margin: '0px 0', opacity: '50%' }} />
      <Projects id="projects"/>
      <hr style={{ borderTop: '1px solid #C8A579', margin: '0px 0', opacity: '50%' }} />
      <Contact id="contact"/>
      <hr style={{ borderTop: '10px solid #C8A579', margin: '0px 0', opacity: '50%' }} />
    </div>
  );
}
