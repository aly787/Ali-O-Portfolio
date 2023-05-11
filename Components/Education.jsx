import { motion } from "framer-motion";
import UniversityList from "../Components/UniversityList";
import GlitchHeader from "./GlitchHeader";
  

const Education = ({ education }) => {
  const universities = [
    {
      name: "University of Birmingham",
      program: "Bachelor of Science in Artificial Intelligence and Computer Science",
      courses: ["Object-oriented Programming", "Entrepreneurship, Innovation and Sustainability", "Artificial Intelligence and Machine Learning", "Software Engineering and Professional Practices", "Data Structure & Algorithms", "Full-stack Application Development", "Mathematical and Logical Foundations of Computer Science", "Theories of Computation", "Advanced Networking", "Human-Computer Interaction", "Machine Learning and Intelligent Data Analysis", "Functional Programming", "Security and Networks", "System Programming in C/C++"],
      roles: ["Student Representative", "Creative Club Member", "Teacher Assistant"]
    },
    {
      name: "University of Toronto",
      program: "Double Major in Computer Science and Business Management",
      courses: ["Introduction to Computer Programming", "Introduction to Mathematical Proofs", "Differential Calculus for Life Sciences", "Integral Calculus for Life Sciences", "Introduction to Management Functions", "Management in a Changing Environment", "Principles of Microeconomics", "Principles of Macroeconomics"],
      roles: ["Tennis Club Member"]
    }
  ];

  return (
    <div className="columns-2" style={{ backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh',display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 0' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center" style={{color:"#FFF8D8", fontFamily: "Montserrat", fontWeight: "700", fontSize: "30px"}}>EDUCATION</h2>
        <h2 className="text-3xl font-bold text-center" style={{color:"white", fontFamily: "Montserrat", fontWeight: "700", fontSize: "40px", marginBottom:"10px"}}>Where I've studied.</h2>
        {universities.map((university, index) => (
          <div key={index} className="flex items-center justify-left mt-1">
            <div className="flex items-center">
              <div className="ml-4" style={{minWidth:"100vh"}}>
                <h2 style={{fontFamily:"Montserrat", fontSize:"25px", color:"rgb(255, 248, 216)"}}>{university.name}</h2>
                <p style={{fontFamily:"Montserrat", fontSize:"20px", color:"lightgray"}}>{university.program}</p>
                <hr style={{ borderTop: '4px ridge rgb(255, 248, 216)', margin: '0px 0', opacity: '30%' }} />
                <h2 style={{fontFamily:"Montserrat", fontSize:"18px", color:"#FFF8D8", marginTop:"20px"}}>Courses:</h2>
                <div className="flex mt-2">
                  <ul className="list-disc ml-6" style={{marginRight:"120px"}}>
                    {university.courses.slice(0, Math.ceil(university.courses.length / 2)).map((course, index) => (
                      <li key={index} className="text-gray-500">{course}</li>
                    ))}
                  </ul>
                  <ul className="list-disc ml-6">
                    {university.courses.slice(Math.ceil(university.courses.length / 2)).map((course, index) => (
                      <li key={index} className="text-gray-500">{course}</li>
                    ))}
                  </ul>
                </div>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop:"20px"}}>
                  <ul className="list-disc ml-6 mt-2 mb-12">
                    {university.roles.map((role, index) => (
                      <span className="bg-[#FFF8D8] text-[black] text-sm font-medium mr-2 px-2.5 py-2 rounded ml-3">{role}</span>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Education;
