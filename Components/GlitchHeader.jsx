import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GlitchHeader = ({ text }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [glitchText, setGlitchText] = useState(text);

  useEffect(() => {
    let intervalId;
    if (hoveredIndex === null) {
      intervalId = setInterval(() => {
        setGlitchText(
          text
            .split("")
            .map((char) =>
              Math.random() > 0.5 ? (
                <span style={{ color: "white" }}>{char}</span>
              ) : (
                char
              )
            )
        );
      }, 50);
    }
    return () => clearInterval(intervalId);
  }, [hoveredIndex, text]);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setGlitchText(text);
  };

  return (
    <motion.span
      style={{
        fontSize: "40px",
        fontWeight: "bold",
        color: "#FFF8D8",
        textShadow: "none",
      }}
      onMouseEnter={() => handleHover(0)}
      onMouseLeave={handleMouseLeave}
    >
      {glitchText}
    </motion.span>
  );
};

export default GlitchHeader;
