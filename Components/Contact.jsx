import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaLinkedin, FaPhone} from 'react-icons/fa';

const Contact = () => {
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
    <section className="bg-[#020816] dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">

            <div className="text-center">
                <p style={{fontSize:"30px"}} className=" text-[#FFF8D8] font-montserrat">Contacts</p>
                <h1 style={{fontSize:"40px", paddingBottom:"30px"}} className="mt-2 text-2xl font-semibold text-white md:text-3xl">Get in touch</h1>
            </div>

            <div style={{paddingBottom:"80px"}} className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center justify-center text-center">
                    <FaEnvelope size={30} onClick={handleEmailClick} style={{ cursor: 'pointer', width:'40', height:"40", color:"#FFF8D8"}}/>
                    <h2 style={{fontSize:"20px"}} className="mt-4 text-lg text-white">Email me</h2>
                    <p style={{fontSize:"16px"}} className="mt-2 text-[#FFF8D8]">ali.t.ottoman@gmail.com</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <FaPhone size={30} style={{ cursor: 'pointer', width:'40', height:"40", color:"#FFF8D8"}}/>
                    <h2 style={{fontSize:"20px"}} className="mt-4 text-lg text-white">Contact me</h2>
                    <p style={{fontSize:"16px"}} className="mt-2 text-[#FFF8D8]">+971 52 1195588</p>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                    <a href="https://www.linkedin.com/in/ali-r-ottoman" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} style={{ cursor: 'pointer', width:'40', height:"40", color:"#FFF8D8"}}/>
                    </a>
                    <h2 style={{fontSize:"20px"}} className="mt-4 text-lg text-white">Connect with me!</h2>
                    <p style={{fontSize:"16px"}} className="mt-2 text-[#FFF8D8]">ali.t.ottoman@gmail.com</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;
