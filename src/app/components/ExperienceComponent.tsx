// "use client";
import { Card, CardBody } from "@nextui-org/react";

const experienceData = [
  { company: "Aladin", role: "Backend Developer", duration: "", logo: "" },
  { company: "ViCK", role: "Software Engineer", duration: "", logo: "" },
];

export default function ExperienceComponent() {
  return (
    <div className="flex h-full flex-col items-center justify-evenly lg:flex-row">
      {experienceData.map((item) => (
        <Card
          key={item.company}
          className="h-[45%] w-4/5 justify-center bg-[#ECE8E5] md:w-3/5 lg:h-4/5 lg:w-[45%] xl:h-full 2xl:w-2/5"
          radius="none"
          isPressable
        >
          <CardBody className="ml-[20%] h-[70%] max-h-[70%] max-w-[70%] items-center justify-center overflow-visible rounded-[5px] border border-[#7A7673] p-0">
            <span
              className="absolute left-0 -translate-x-1/2 bg-[#ECE8E5] p-1 text-7xl text-[#92755F] sm:text-8xl xl:text-[7.5rem] 2xl:text-9xl"
              style={{
                fontFamily: "__Jomhuria_2f4731",
                fontWeight: "400",
                fontStyle: "normal",
              }}
            >
              {item.company}
            </span>
            <span
              className="w-min text-center text-3xl font-light text-[#92755F] sm:text-4xl xl:text-[2.75rem] xl:leading-none 2xl:text-5xl"
              style={{ fontFamily: "__Inter_aaf875", fontStyle: "normal" }}
            >
              {item.role}
            </span>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
