"use client";
import Image from "next/image";
import ImageModalComponent from "./ImageModalComponent";
import Link from "next/link";
import { LinkIcon } from "@nextui-org/react";
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
      className="relative mx-auto h-full w-11/12 rounded-md border border-content1-foreground px-4 pb-12 pt-4 shadow-lg will-change-transform"
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
      <legend className="personal-project-title ml-3 px-1 font-bold text-content1-foreground">
        {item.name}
      </legend>
      <figure className="flex h-full w-full flex-row p-4 pl-7">
        <div className="flex h-full w-2/5 items-center justify-center">
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
        <figcaption className="flex w-3/5 flex-col justify-around gap-4 px-5">
          <div className="flex flex-col gap-4">
            <span className="flex items-center justify-center text-left font-light italic">
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
            <div className="flex gap-8 px-6">
              {item.technologies.map((tech) => (
                <figure
                  key={tech.name}
                  className="flex flex-col items-center justify-center gap-1"
                >
                  <span className="relative flex size-12 justify-center">
                    {tech.icon}
                  </span>
                  <figcaption className="font-bold">{tech.name}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </figcaption>
      </figure>
      <Link
        className="absolute bottom-0 right-8 flex translate-y-1/2 
                      items-center justify-center gap-4 
                      bg-gradient-to-b from-transparent from-50% via-background via-50% px-1 "
        href={item.href}
        target="_blank"
      >
        Explore more
        <span className="text-4xl">
          <LinkIcon />
        </span>
      </Link>
    </fieldset>
  );
}
