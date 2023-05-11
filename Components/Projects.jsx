import { useEffect, useState } from 'react';

const Projects = () => {
  const [text, setText] = useState('');
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    'Project1.png',
    'Project2.png',
  ];

  const texts = [
    {
      header: 'Building a Prior for Hypothesis Testing using Conditional Sampling: ',
      paragraph: 'Explored Bayesian inference and conditional sampling techniques in computer science for constructing prior distributions in hypothesis testing. Investigated advantages over frequentist methods, with applications in parameter estimation, model fitting, and uncertainty quantification. Developed and implemented a comprehensive research methodology, demonstrating proficiency in statistical analysis and computational techniques. The project showcased the ability to apply advanced statistical methods to address real-world problems in computer science.',
    },
    {
      header: 'Bloom: ',
      paragraph: 'Bloom was the culmination of months of work, where we developed a website that utilized AI models to create unique solutions for startups and recommend the most suitable providers across the board.',
    },
  ];
  

  useEffect(() => {
    typeOutText(texts[imageIndex].header, texts[imageIndex].paragraph);
  }, [imageIndex]);

  const handleNext = () => {
    const newIndex = (imageIndex + 1) % images.length;
    setImageIndex(newIndex);
    setText('');
    typeOutText(texts[newIndex].header, texts[newIndex].paragraph);
  };

  const typeOutText = (header, paragraph) => {
    const fullText = `${header}\n${paragraph}`;
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 20);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-8 bg-[#020816] text-white flex items-center">
        <div style={{color:"white"}}className="mb-4">
          <span className="text-green-500">{'>'}</span> {text}
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
