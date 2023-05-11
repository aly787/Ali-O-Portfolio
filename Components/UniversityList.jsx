import { useState } from "react";
import { motion } from "framer-motion";

const universities = [
  {
    name: "University of Example",
    courses: ["Computer Science", "Mathematics", "Physics"],
    clubs: ["Chess Club", "Debate Club", "Gaming Club"],
  },
  {
    name: "Example University",
    courses: ["Software Engineering", "Data Science", "Artificial Intelligence"],
    clubs: ["Photography Club", "Music Club", "Sports Club"],
  },
];

const List = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={handleMouseLeave}
        >
          {item.split("").map((char, index) => (
            <motion.span
              key={index}
              style={{
                display: "inline-block",
                fontSize: "1rem",
                fontWeight: hoveredIndex === index ? "bold" : "normal",
                color: hoveredIndex === index ? "#FBBF24" : "#111827",
                textShadow:
                  hoveredIndex === index
                    ? "0 0 8px #FBBF24"
                    : "none",
              }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              {char}
            </motion.span>
          ))}
        </li>
      ))}
    </ul>
  );
};

const UniversityList = () => {
  return (
    <div>
      {universities.map((university, index) => (
        <div key={index}>
          <h2>{university.name}</h2>
          <div>
            <h3>Courses</h3>
            <List items={university.courses} />
          </div>
          <div>
            <h3>Clubs</h3>
            <List items={university.clubs} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UniversityList;
