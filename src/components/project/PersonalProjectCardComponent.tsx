"use client";
import Image from "next/image";
import ImageModalComponent from "./ImageModalComponent";
import Link from "next/link";
import { Avatar, Chip, LinkIcon } from "@nextui-org/react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ProjectProps } from "@/lib/personal-project-data";

export default function PersonalProjectCard({
  item,
  index,
}: {
  item: ProjectProps;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <fieldset
      ref={ref}
      className=" relative mx-auto h-full w-11/12 rounded-md border border-content1-foreground pb-4 shadow-lg will-change-transform max-sm:flex max-sm:flex-col sm:px-4 sm:pb-12 sm:pt-4"
      style={{
        opacity: `${isInView ? "1" : "0"}`,
        transform: `${isInView ? "rotateY(0deg)" : "rotateY(90deg)"}`,
        transformOrigin: "left",
        transitionDuration: "0.8s",
        transitionTimingFunction: "ease-in-out",
        transitionDelay: `${index * 0.15}s`,
        transitionProperty: "opacity, transform",
      }}
    >
      <legend className="personal-project-title ml-3 px-1 font-bold text-content1-foreground max-sm:hidden">
        {item.name}
      </legend>
      <span className="relative h-24 w-full overflow-hidden rounded-md sm:hidden">
        <Image
          src={item.mobileThumbnail}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          quality={95}
        />
      </span>

      <figure className="flex w-full flex-col max-sm:gap-2 sm:h-full sm:flex-row sm:p-4 sm:pl-7">
        <Avatar
          src={item.logo}
          isBordered
          classNames={{
            base: "mx-auto -translate-y-1/2 w-20 h-20 sm:hidden bg-neutral-100",
            img: `${index === 0 ? "object-cover" : "object-contain"}`,
          }}
        />

        <div className="flex h-full w-2/5 items-center justify-center max-sm:hidden">
          {item.thumbnail ? (
            <ImageModalComponent
              gallery={item.thumbnail}
              defaultSelected={0}
              isFloat={false}
              className="m-0"
              // imageClass="max-w-full rounded-lg"
            />
          ) : (
            <span className="relative size-full">
              <Image
                src={item.logo}
                alt=""
                fill
                className="h-full w-auto object-contain dark:rounded-md dark:bg-white"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </span>
          )}
        </div>

        <figcaption className="flex flex-col justify-around gap-1 px-3 max-sm:-mt-10 sm:w-3/5 sm:gap-4 sm:px-5">
          <div className="flex flex-col gap-1 sm:gap-4">
            <span className="personal-project-title text-center font-bold text-content1-foreground max-sm:leading-none sm:hidden">
              {item.name}
            </span>
            <span className="flex items-center justify-center text-center font-light italic sm:text-left">
              {item.intro}
            </span>
            {Array.isArray(item.description) ? (
              <ul className="list-inside list-disc font-light">
                {item.description.map((des, index) => (
                  <li key={index}>{des}</li>
                ))}
              </ul>
            ) : (
              <span className="font-light">{item.description}</span>
            )}
          </div>

          {item.technologies && (
            <div className="flex gap-2 px-6 max-sm:mx-auto sm:gap-8">
              {item.technologies.map((tech) => (
                <div key={tech.name}>
                  <figure className="flex flex-col items-center justify-center gap-1 max-sm:hidden">
                    <span className="relative flex size-12 justify-center">
                      {tech.icon}
                    </span>
                    <figcaption className="font-bold">{tech.name}</figcaption>
                  </figure>
                  <Chip
                    className="bg-foreground font-normal text-default sm:hidden"
                    style={{
                      fontSize: "clamp(0.75rem, 1.011vw + 0.346rem, 1.438rem)",
                    }}
                  >
                    {tech.name}
                  </Chip>
                </div>
              ))}
            </div>
          )}
        </figcaption>
      </figure>
      <Link
        className="absolute bottom-0 right-2 flex items-center justify-center
                      gap-1 bg-gradient-to-b from-transparent from-50% 
                      via-background via-50% px-1 max-sm:font-bold sm:right-8 sm:translate-y-1/2 sm:gap-4
                      "
        href={item.href}
        target="_blank"
      >
        Explore more
        <span className="text-sm max-sm:hidden sm:text-4xl ">
          <LinkIcon />
        </span>
      </Link>
      <span className="personal-project-time absolute bottom-0 left-2 font-bold sm:hidden">
        {item.time}
      </span>
    </fieldset>
  );
}
