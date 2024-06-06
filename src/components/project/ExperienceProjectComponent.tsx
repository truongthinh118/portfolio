import { experienceProjectProps } from "@/data/experience-data";
import ImageModalComponent from "./ImageModalComponent";
import React from "react";
import { ArrowLeftIcon } from "../icon/ArrowLeftIcon";
import { ArrowRightIcon } from "../icon/ArrowRightIcon";
import BounceUp from "../motion/BounceUpComponent";

interface Props {
  item: experienceProjectProps;
  index: number;
  galleryPosition: "left" | "right";
  isLast: boolean;
}

export default function ExperienceProject({
  item,
  index,
  galleryPosition,
  isLast,
}: Props) {
  return (
    <BounceUp
      classNames={{
        wrapper: `project ${index === 0 ? "max-md:mt-4" : "max-md:flex max-md:flex-col-reverse"}`,
      }}
      custom={index}
    >
      {index > 0 && !!item.imageGallery && (
        <ImageModalComponent
          gallery={item.imageGallery}
          defaultSelected={0}
          isFloat={index > 0}
          floatPosition={galleryPosition}
        />
      )}
      <div
        className={`${index > 0 && !!item.imageGallery ? `flex flex-col ${galleryPosition === "left" ? "lg:clear-right" : "lg:clear-left"}` : ""}`}
      >
        <h2 className="text-content1-foreground">{item.name}</h2>
        <span className="">
          My responsibility:
          <p>
            {item.responsibility.map((des) => (
              <React.Fragment key={des}>
                {des}
                <br />
              </React.Fragment>
            ))}
          </p>
          Team size: {item.teamsize}
        </span>

        {!!item.imageGallery && !isLast && (
          <span
            className={`hidden lg:flex ${galleryPosition === "left" ? "ml-8 justify-start" : "mr-8 justify-end"}`}
          >
            {index > 0 && galleryPosition === "left" && <ArrowLeftIcon />}
            {galleryPosition === "right" && <ArrowRightIcon />}
          </span>
        )}
      </div>
      {index === 0 && !!item.imageGallery && (
        <ImageModalComponent
          gallery={item.imageGallery}
          defaultSelected={0}
          isFloat={false}
        />
      )}
    </BounceUp>
  );
}
