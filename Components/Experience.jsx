import React from 'react';
import { FcBusiness } from "react-icons/fc";

const ExperienceTimeline = () => {


  return (
    <div className="container mx-auto py-2  h-screen">

      <div style={{padding:"20px", paddingBottom:"30px"}}>
        <h2 style={{ textAlign: 'center', color: "#FFF8D8", fontFamily: "Montserrat", fontWeight: "700", fontSize: "30px" }}>EXPERIENCE</h2>
        <h2 style={{ textAlign: 'center', color: "white", fontFamily: "Montserrat", fontWeight: "700", fontSize: "40px" }}>Here's where I worked & my Education.</h2>
      </div>
      <ol className="relative border-l border-[#FFF8D8] dark:border-gray-700">                  
          <li className="mb-10 ml-8">            
              <span className="absolute flex items-center justify-center w-6 h-6 bg-[#FFF8D8] rounded-full -left-3 ring-8 ring-[#FFF8D8] dark:ring-gray-900 dark:bg-blue-900">
                  <FcBusiness className="w-6 h-6"/>
              </span>
              <h3 className="flex items-center mb-3 text-2xl font-semibold text-white">Odoo<span style={{paddingLeft:"10px"}} className="text-[#C8A579]">  (Functional Services Intern)</span>
                  <span className="bg-[#FFF8D8] text-[#8c6739] text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Excel</span>
                  <span className="bg-[#FFF8D8] text-[#8c6739] text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Python</span>
                  <span className="bg-[#FFF8D8] text-[#8c6739] text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Odoo Suite</span>
                  <span className="bg-[#FFF8D8] text-[#8c6739] text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Creative Problem Solving </span>
                  <span className="bg-[#FFF8D8] text-[#8c6739] text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Operational Efficiency</span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jul 2022 - Oct 2022</time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">As a functional consultant intern at Odoo, my role was to understand clients' business requirements and configure the Odoo software accordingly. I worked closely with clients to map out their business processes and provided training on how to use the software effectively. I also gained hands-on experience troubleshooting issues and staying updated with the latest Odoo developments. Additionally, I worked closely with the Head of Functional Consultants, creating an employee performance analysis where I used my AI knowledge to create a system that automated the data collection on the employees and facilitate this analysis. </p>
          </li>
          <li className="mb-10 ml-8">            
              <span className="absolute flex items-center justify-center w-6 h-6 bg-[#FFF8D8] rounded-full -left-3 ring-8 ring-[#FFF8D8] dark:ring-gray-900 dark:bg-blue-900">
                  <FcBusiness className="w-6 h-6"/>
              </span>
              <h3 className="flex items-center mb-3 text-2xl font-semibold text-white">GrowDigital<span style={{paddingLeft:"10px"}} className="text-[#C8A579]">(Project Intern · Presales)</span>
                  <span className="bg-[#FFF8D8] text-[#8c6739] text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Excel</span>
                  <span className="bg-[#FFF8D8] text-[#8c6739] text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Python</span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dec 2021 - Apr 2022 · Jun 2022 - Jul 2022</time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">As a Presales intern at GrowDigital, I supported the sales team by conducting market research, analyzing customer needs, and preparing sales materials. I assisted in creating sales pitches and presentations, and I also participated in product demonstrations to potential clients. Additionally, I collaborated with the development team to ensure our product aligns with customer requirements. I played a vital role in managing customer relationships by addressing inquiries, resolving issues, and providing ongoing support. As a Presales intern, I contributed to the sales process and strive to deliver optimal solutions that meet our clients' needs at GrowDigital.</p>
          </li>
          <li className="mb-10 ml-8">            
              <span className="absolute flex items-center justify-center w-6 h-6 bg-[#FFF8D8] rounded-full -left-3 ring-8 ring-[#FFF8D8] dark:ring-gray-900 dark:bg-blue-900">
                  <FcBusiness className="w-6 h-6"/>
              </span>
              <h3 className="flex items-center mb-3 text-2xl font-semibold text-white">Celfocus<span style={{paddingLeft:"10px"}} className="text-[#C8A579]">  (Intern)</span>
                  <span className="bg-[#FFF8D8] text-[#8c6739] text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">JavaScript</span>
                  <span className="bg-[#FFF8D8] text-[#8c6739] text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Cascading Style Sheets (CSS)</span>
                  <span className="bg-[#FFF8D8] text-[#8c6739] text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Java</span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jun 2021 - Sep 2021</time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">As an intern at Celfocus, I had the opportunity to work with the developer team responsible for maintaining Vodafone Qatar's website. My role involved assisting in website development tasks, including coding, testing, and debugging. Additionally, I gained valuable experience in conducting code reviews and identifying areas for optimization. Throughout my internship, I actively contributed to the team's agile development process, participated in meetings, and shared ideas for continuous improvement. Working with the developer team at Celfocus allowed me to deepen my technical skills and understand the importance of delivering high-quality solutions for a prominent client like Vodafone Qatar.</p>
          </li>
      </ol>
    </div>
  );
};

export default ExperienceTimeline;
