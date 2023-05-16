import React from 'react';
import AppSkillLevel from './AppSkillLevel';

const About = () => {
  const headingStyle = {
    lineHeight: "3",
    textAlign: 'left',
    color: "#FFF8D8",
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: "22px",
  };

  const contentStyle = {
    textAlign: 'left',
    color: "grey",
    fontWeight: "200",
    fontSize: "18px",
    wordWrap: 'break-word',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 100,
  };

  return (
    <div id="about" className="columns-2" style={{ backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh',display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 0' }}>
      <div>
        <h2 style={{ textAlign: 'center', color: "#FFF8D8", fontFamily: "Montserrat", fontWeight: "700", fontSize: "30px" }}>ABOUT</h2>
        <h2 style={{ textAlign: 'center', color: "white", fontFamily: "Montserrat", fontWeight: "700", fontSize: "40px" }}>A little about myself.</h2>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', width: '80%' }}>
        
        <div style={{ display: 'flex', justifyContent: 'center', flex:"1",}}>
          <div style={{ position: 'sticky', top: '0' }}>
            <h3 style={headingStyle}>Profile</h3>
            <p style={contentStyle}>As an ambitious and innovative AI and Computer Science graduate, I am equipped with a solid foundation in cutting-edge technologies. Passionate about leveraging Artificial Intelligence to drive transformative solutions, I am driven to contribute to the ever-evolving field of technology. With a focus on problem-solving and a dedication to lifelong learning, I am eager to make a meaningful impact and shape the future of the digital landscape.</p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '1px', backgroundColor: '#FFF8D8', height: '80%', alignSelf: 'center' }}></div>
        </div>

        <div style={{position: 'sticky', justifyContent: 'center', flex:"1"}}>
            <div>
                <h3 style={headingStyle}>Skills</h3>
                <AppSkillLevel appName="Python" ratingPercentage={90} />
                <AppSkillLevel appName="Java" ratingPercentage={80} />
                <AppSkillLevel appName="Pandas" ratingPercentage={85} />
                <AppSkillLevel appName="NumpPy" ratingPercentage={85} />
                <AppSkillLevel appName="JavaScript" ratingPercentage={70} />
                <AppSkillLevel appName="ReactJS" ratingPercentage={70} />
                <AppSkillLevel appName="TailwindCSS" ratingPercentage={80} />
                <AppSkillLevel appName="GitHub" ratingPercentage={70} />
                <AppSkillLevel appName="Figma" ratingPercentage={70} />
                <AppSkillLevel appName="SQL" ratingPercentage={85} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
