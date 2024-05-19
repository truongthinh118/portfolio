"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const ProjectSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 3,
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 2) % 3,
      );

      return updatedIndexes;
    });
  };

  const images = [
    "background.jpeg",
    "background-2.jpeg",
    "welcome-background-dark.png",
  ];

  const positions = ["center", "left", "right"];

  const imageVariants = {
    center: { x: "0%", y: "0%", scale: 1, zIndex: 1 },
    left: { x: "-90%", y: "-70%", scale: 0.5, zIndex: 0 },
    right: { x: "90%", y: "-70%", scale: 0.5, zIndex: 0 },
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {images.map((image, index) => (
        <motion.a
          key={index}
          href={`${positions[positionIndexes[index]] === "center" ? "/" : undefined}`}
          className="rounded-[12px]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "20%", position: "absolute" }}
          whileTap={{ scale: 0.8 }}
          onClick={() =>
            positions[positionIndexes[index]] === "left"
              ? handleBack()
              : positions[positionIndexes[index]] === "right" && handleNext()
          }
        >
          <img src={image} />
        </motion.a>
      ))}
    </div>
  );
};

export default ProjectSlider;
