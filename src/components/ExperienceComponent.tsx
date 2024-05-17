"use client";
import { Button, Card, CardBody, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { UserIcon } from "./icon/UserIcon";
import { CalendarIcon } from "./icon/CalendarIcon";
import { font } from "@/styles/font";

type ExperienceProps = {
  company: string;
  role: string;
  duration: string;
  logo: string;
  href: string;
  description: string;
};

const experienceData: ExperienceProps[] = [
  {
    company: "Aladin",
    role: "Backend Developer",
    duration: "Nov 2021 - Oct 2022",
    logo: "/aladin.svg",
    href: "https://aladin.finance/",
    description:
      "A platform connecting the community of professional consultants.",
  },
  {
    company: "ViCK",
    role: "Software Engineer",
    duration: "Oct 2022 - Present",
    logo: "/vick.svg",
    href: "https://vick.vn/",
    description:
      "VICK stands as a pioneer among Vietnam’s stock market enterprises, offering exclusive Expert Consulting/Investment Advisory services tailored for individual investors.",
  },
];

export default function ExperienceComponent() {
  return (
    <div className="flex h-full flex-col items-center justify-evenly lg:flex-row">
      {experienceData.map((item) => (
        <ExperienceCard item={item} key={item.company} />
      ))}
    </div>
  );
}

function ExperienceCard({ item }: { item: ExperienceProps }) {
  const [flip, setFlip] = useState(true);
  return (
    <motion.div
      className="h-[45%] w-4/5 md:w-3/5 lg:h-4/5 lg:w-[45%] xl:h-full 2xl:w-2/5"
      transition={{ duration: 0.7 }}
      animate={{ rotateY: flip ? 0 : 180 }}
    >
      <Card
        className="size-full justify-center bg-background text-content1-foreground"
        radius="none"
        isPressable
        disableRipple
        onPress={() => setFlip(!flip)}
        style={{
          transform: `rotateY(${flip ? "0" : "180deg"})`,
          transitionDuration: "700ms",
        }}
      >
        <CardBody
          className="exp-card-front absolute ml-[20%] h-[70%] max-h-[70%] max-w-[70%] items-center justify-center overflow-visible rounded-[5px] border border-[#7A7673] p-0"
          style={{
            transform: `rotateY(${flip ? "0" : "180deg"})`,
            transitionDuration: "700ms",
          }}
        >
          <span
            className={`absolute left-0 -translate-x-1/2 bg-[#ECE8E5] p-1 text-6xl sm:text-8xl xl:text-[7.5rem] 2xl:text-9xl ${font.jomhuria.className}`}
          >
            {item.company}
          </span>
          <span
            className={`w-min text-center text-2xl font-light sm:text-4xl xl:text-[2.75rem] xl:leading-none 2xl:text-5xl ${font.inter.className}`}
          >
            {item.role}
          </span>
        </CardBody>
        <ExperienceInfomation item={item} flip={flip} />
      </Card>
    </motion.div>
  );
}

function ExperienceInfomation({
  item,
  flip,
}: {
  item: ExperienceProps;
  flip: boolean;
}) {
  return (
    <CardBody
      className={`exp-card-back absolute flex h-full flex-col items-center justify-start gap-2 text-2xl lg:p-6 ${font.inter.className}`}
      style={{
        transform: `rotateY(${flip ? "180deg" : "0"})`,
        transitionDuration: "700ms",
      }}
    >
      <div className="flex h-auto w-full flex-row items-center justify-between gap-1">
        <Button
          className="h-16 min-h-16 w-16 min-w-16 bg-neutral-100  sm:h-24 sm:min-h-24 sm:w-24 sm:min-w-24 xl:h-32 xl:min-h-32 xl:w-32 xl:min-w-32"
          isIconOnly
          href={item.href}
          as={Link}
          isExternal
        >
          <Image className="p-2" src={item.logo} alt={item.company} fill />
        </Button>

        <div className="flex h-full flex-col justify-evenly">
          <div className="flex flex-row items-center gap-2 lg:gap-4">
            <UserIcon className="h-3 fill-current text-current sm:h-10 sm:p-2" />
            <span className="text-sm font-light xs:text-lg 2xl:text-2xl ">
              Role: {item.role}
            </span>
          </div>

          <div className="flex flex-row items-center gap-2 lg:gap-4">
            <CalendarIcon className="h-3 fill-current text-current sm:h-10 sm:p-2" />
            <span className="text-sm font-light xs:text-lg  2xl:text-2xl">
              Duration: {item.duration}
            </span>
          </div>
        </div>
      </div>

      <blockquote className="text-base font-light italic sm:text-lg 2xl:text-2xl">
        "{item.description}"
      </blockquote>
    </CardBody>
  );
}
