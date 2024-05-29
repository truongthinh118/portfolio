import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import ImageModalComponent from "@/components/project/ImageModalComponent";
import { experienceData } from "@/assets/experience-data";
import React from "react";
import ExperienceIntoduction from "@/components/project/ExperienceIntroComponent";

export default function Test({ params }: { params: { name: string } }) {
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
            <section className="mx-auto md:float-right md:ml-4 md:mr-4 lg:ml-24">
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
                          floatPosition={
                            index === 0
                              ? "end"
                              : galleryPosition
                                ? "left"
                                : "right"
                          }
                        />
                      )}
                      <div
                        className={`
                        ${
                          index > 0 && !!item.imageGallery
                            ? `flex w-[55%] flex-col ${galleryPosition ? "lg:clear-right" : "lg:clear-left"}`
                            : ""
                        }`.trim()}
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
                        {!!item.imageGallery && (
                          <span
                            className={`hidden lg:flex ${galleryPosition ? "ml-8 justify-start" : "mr-8 justify-end"}`}
                          >
                            {index > 0 && galleryPosition && (
                              <svg
                                width="110"
                                height="95"
                                viewBox="0 0 110 95"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-content1-foreground"
                              >
                                <path
                                  d="M27.4999 79.988L27.4999 77.488L27.4999 79.988ZM-1.78749e-05 79.988L25 94.4217L25 65.5542L-1.78749e-05 79.988ZM27.4999 77.488L22.5 77.488L22.5 82.488L27.4999 82.488L27.4999 77.488ZM104.5 0.48785C104.5 43.0138 70.0259 77.488 27.4999 77.488L27.4999 82.488C72.7873 82.488 109.5 45.7753 109.5 0.487853L104.5 0.48785Z"
                                  fill="currentColor"
                                />
                              </svg>
                            )}
                            {!galleryPosition && (
                              <svg
                                width="110"
                                height="95"
                                viewBox="0 0 110 95"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-content1-foreground"
                              >
                                <path
                                  d="M82.2098 79.988L82.2098 77.488L82.2098 79.988ZM109.71 79.988L84.7097 94.4217L84.7097 65.5542L109.71 79.988ZM82.2098 77.488L87.2097 77.488L87.2097 82.488L82.2098 82.488L82.2098 77.488ZM5.2096 0.48785C5.20963 43.0138 39.6838 77.488 82.2098 77.488L82.2098 82.488C36.9223 82.488 0.209634 45.7753 0.209597 0.487853L5.2096 0.48785Z"
                                  fill="currentColor"
                                />
                              </svg>
                            )}
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
            </section>
          </article>
        </fieldset>
      </main>
    </>
  );
}
