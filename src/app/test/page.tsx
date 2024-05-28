"use client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import ImageModalComponent from "@/components/project/ImageModalComponent";
import { experienceData } from "@/assets/experience-data";
import React from "react";
import ExperienceIntoduction from "@/components/project/ExperienceIntroComponent";

export default function Test() {
  const data = experienceData.vick;

  const galleryList = data.project
    .filter((item) => !!item.imageGallery)
    .map((item) => item.name);

  return (
    <>
      <main className="container mx-auto my-16">
        <fieldset className="project-wrapper rounded-[5px] border border-foreground">
          <legend className="project-title ml-4 px-1 sm:ml-16">
            <Link href={data.web} target="_blank">
              {data.fullname}
            </Link>
          </legend>
          <article className="p-8 text-justify">
            <section className="mx-auto md:float-right md:ml-12 md:mr-4 lg:ml-24">
              <ExperienceIntoduction data={data} />
            </section>

            <section className="project-inner md:clear-left">
              {data.project.map((item, index) => {
                const galleryPosition =
                  galleryList.indexOf(item.name) % 2 === 0;
                return (
                  <React.Fragment key={index}>
                    <div
                      className={`project ${index === 0 ? "flex flex-col-reverse max-md:mt-4" : "max-md:flex max-md:flex-col-reverse"} `}
                    >
                      {!!item.imageGallery && (
                        <ImageModalComponent
                          gallery={item.imageGallery}
                          defaultSelected={item.imageGallery[0]}
                        >
                          <Button
                            className={`
                            m-4 h-48 w-[95%]
                             rounded-xl border-8 border-content1-foreground bg-content1-foreground
                              max-lg:mx-auto max-lg:flex md:h-96 md:border-[15px] 
                               ${index > 0 ? (galleryPosition ? "lg:float-left lg:w-[45%]" : "lg:float-right lg:w-[45%]") : ""}
                               `}
                            isIconOnly
                          >
                            <Image
                              src={item.imageGallery[0]}
                              fill
                              alt=""
                              className="rounded-lg object-contain"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              priority
                            />
                          </Button>
                        </ImageModalComponent>
                      )}
                      <div
                        className={`${index > 0 ? (galleryPosition ? "lg:clear-right" : !!item.imageGallery ? "lg:clear-left" : "lg:clear-both") : ""}`}
                      >
                        <h2 className="text-content1-foreground">
                          {item.name}
                        </h2>
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
                        <br />
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </section>
          </article>
        </fieldset>
      </main>
    </>
  );
}
