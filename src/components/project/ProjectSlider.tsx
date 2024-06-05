"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Link from "next/link";
import { font } from "@/assets/font";
import Image from "next/image";
import AladinIcon from "../icon/AladinIcon";
import ViCKIcon from "../icon/VickIcon";

const ProjectSlider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

  const exps = [
    {
      name: "Aladin",
      logo: <AladinIcon className="size-full p-2 bg-blend-darken" />,
      background: "bg-[#002366]",
      href: "/experience/aladin",
      borderClass: "from-[#ee9775] via-[#E9622D] via-30%	to-[#002C82]",
    },
    {
      name: "ViCK",
      logo: <ViCKIcon className="size-full p-2 bg-blend-darken" />,
      background: "bg-[#EE8F00]",
      href: "/experience/vick",
      borderClass: "from-[#002C82] via-[#455798] via-30% to-[#EE8F00]",
    },
    {
      name: "Personal Project",
      logo: (
        <Image src={"/logo.svg"} alt="" fill className="p-2 bg-blend-darken" />
      ),
      background: "bg-content1-foreground",
      href: "/experience/personal-projects",
      borderClass: "from-[#ECE8E5] via-[#92755F] via-30% to-[#ECE8E5]",
    },
  ];

  const positions = ["center", "left", "right"];

  const imageVariants = {
    center: { x: "0%", y: "0%", scale: 1, zIndex: 1 },
    left: { x: "-100%", y: "-50%", scale: 0.7, zIndex: 0 },
    right: { x: "100%", y: "-50%", scale: 0.7, zIndex: 0 },
  };
  return (
    <div
      className="relative flex size-full flex-col items-center justify-center"
      ref={ref}
    >
      <AnimatePresence initial={false}>
        {exps.map((exp, index) => (
          <motion.div
            key={index}
            className="flex aspect-[4/5] h-[60%] min-h-[60%] max-w-[35%] cursor-pointer overflow-hidden rounded-md bg-background"
            initial="center"
            animate={isInView ? positions[positionIndexes[index]] : "center"}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ position: "absolute" }}
            whileTap={{ scale: 0.8 }}
            onClick={() =>
              positions[positionIndexes[index]] === "left"
                ? handleBack()
                : positions[positionIndexes[index]] === "right" && handleNext()
            }
          >
            <ExperienceCard
              item={exp}
              position={positions[positionIndexes[index]]}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ProjectSlider;

function ExperienceCard({ item, position }: { item: any; position: string }) {
  return (
    <>
      {position === "center" ? (
        <Link href={item.href} className="flex size-full">
          <ExperienceCardContent item={item} />
        </Link>
      ) : (
        <ExperienceCardContent item={item} />
      )}
    </>
  );
}

function ExperienceCardContent({ item }: { item: any }) {
  const [isHover, setHover] = useState(false);
  return (
    <>
      <motion.div
        className={`m-auto flex	size-5/6 items-center justify-center rounded-md ${isHover ? item.background : "border border-[#7A7673] "}`}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
      >
        {isHover ? (
          <>
            <div
              className={`flex h-2/5 w-[90%] items-center justify-center rounded-2xl bg-gradient-to-r  p-1 ${item.borderClass}`}
            >
              <span className="relative size-full rounded-xl bg-neutral-50">
                {item.logo}
              </span>
            </div>
          </>
        ) : (
          <span
            className={`text-center text-[5.5vmax] leading-none text-content1-foreground ${font.jomhuria.className}`}
          >
            {item.name}
          </span>
        )}
      </motion.div>
    </>
  );
}
