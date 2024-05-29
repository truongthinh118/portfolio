import { Metadata } from "next";
import Link from "next/link";
import ImageModalComponent from "@/components/project/ImageModalComponent";
import { experienceData } from "@/assets/experience-data";
import React from "react";
import ExperienceIntoduction from "@/components/project/ExperienceIntroComponent";
import { ArrowLeftIcon } from "@/components/icon/ArrowLeftIcon";
import { ArrowRightIcon } from "@/components/icon/ArrowRightIcon";

export default function ExperiencePage({
  params,
}: {
  params: { name: string };
}) {
  const data = experienceData[params.name];

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
          <article className="px-4 py-8 text-justify sm:py-8 lg:px-12">
            <section className="mx-auto md:ml-4 md:mr-4 lg:float-right lg:ml-24">
              <ExperienceIntoduction data={data} />
            </section>

            <section className="project-inner md:clear-left">
              {data.project.map((item, index) => {
                const galleryPosition =
                  galleryList.indexOf(item.name) % 2 === 0;
                return (
                  <React.Fragment key={index}>
                    <div
                      className={`project ${index === 0 ? "max-md:mt-4" : "max-md:flex max-md:flex-col-reverse"} `}
                    >
                      {index > 0 && !!item.imageGallery && (
                        <ImageModalComponent
                          gallery={item.imageGallery}
                          defaultSelected={item.imageGallery[0]}
                          isFloat={index > 0}
                          floatPosition={galleryPosition ? "left" : "right"}
                        />
                      )}
                      <div
                        className={`${index > 0 && !!item.imageGallery ? `flex flex-col ${galleryPosition ? "lg:clear-right" : "lg:clear-left"}` : ""}`}
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

                        {!!item.imageGallery &&
                          index !== data.project.length - 1 && (
                            <span
                              className={`hidden lg:flex ${galleryPosition ? "ml-8 justify-start" : "mr-8 justify-end"}`}
                            >
                              {index > 0 && galleryPosition && (
                                <ArrowLeftIcon />
                              )}
                              {!galleryPosition && <ArrowRightIcon />}
                            </span>
                          )}
                      </div>
                      {index === 0 && !!item.imageGallery && (
                        <ImageModalComponent
                          gallery={item.imageGallery}
                          defaultSelected={item.imageGallery[0]}
                          isFloat={false}
                        />
                      )}
                    </div>
                  </React.Fragment>
                );
              })}
              {!!data.otherRoles &&
                data.otherRoles.map((item, index) => (
                  <div key={index} className="project flex w-full flex-col">
                    <h2 className="text-content1-foreground">{item.title}</h2>
                    <span className="">
                      Role: {item.role}
                      <p>
                        {item.description.map((des) => (
                          <React.Fragment key={des}>
                            {des}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>
                    </span>
                  </div>
                ))}
            </section>
          </article>
        </fieldset>
      </main>
    </>
  );
}
