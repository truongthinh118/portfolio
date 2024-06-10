import ImageModalComponent from "./ImageModalComponent";
import React from "react";
import BounceUp from "../motion/BounceUpComponent";
import { experienceProjectProps } from "@/lib/experience-data";
import { ArrowLeftIcon, ArrowRightIcon } from "../icon/Icon";

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
          {item.techStack && (
            <>
              <br />
              Tech Stack:{" "}
              {Object.entries(item.techStack).map(([key, value]) => (
                <p key={key} className="ml-4">
                  <strong>{key}: </strong> {value.join(", ")}
                </p>
              ))}
            </>
          )}
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
