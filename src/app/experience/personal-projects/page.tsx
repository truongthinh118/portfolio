import { projects } from "@/assets/personal-project-data";
import ImageModalComponent from "@/components/project/ImageModalComponent";
import { Button, LinkIcon } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PersonalProjectPage() {
  const data = projects;

  return (
    <>
      <main className="container m-auto flex flex-col">
        <h1 className="page-title mb-18 mt-12 w-full text-center leading-none md:mb-24">
          PERSONAL PROJECTS
        </h1>
        <section className="flex h-full grow flex-col">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <div className="personal-project flex md:divide-x-2 md:divide-foreground">
                <div className="flex w-2/12 items-center justify-center px-1 py-8 max-md:hidden">
                  <span className="personal-project-time flex aspect-square w-full max-w-48 items-center justify-center rounded-full border border-content4-foreground bg-content4 font-bold text-content4-foreground">
                    {item.time}
                  </span>
                </div>

                <div className="relative w-full py-8">
                  {(index === 0 || index === data.length - 1) && (
                    <span
                      className={`absolute left-0 max-md:hidden ${index === 0 ? "top-0 -translate-y-1/2" : "bottom-0 translate-y-1/2"} size-4 -translate-x-[calc(50%+1px)] rounded-full bg-content4-foreground`}
                    />
                  )}

                  <fieldset
                    className="relative mx-auto h-full w-11/12 rounded-md border border-content1-foreground px-4 pb-12 pt-4 shadow-lg"
                    // style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                  >
                    <legend className="personal-project-title ml-3 font-bold text-content1-foreground">
                      {item.name}
                    </legend>
                    <figure className="flex h-full w-full flex-row p-4 pl-7">
                      <div className="flex h-full w-2/5 items-center justify-center">
                        <ImageModalComponent
                          gallery={item.thumbnail}
                          defaultSelected={item.thumbnail[0]}
                          isFloat={false}
                          className="m-0"
                          // imageClass="max-w-full rounded-lg"
                        />
                      </div>
                      <figcaption className="flex w-3/5 flex-col justify-around gap-4 px-5">
                        <div className="flex flex-col gap-4">
                          <span className="flex items-center justify-center text-left font-light italic">
                            {item.intro}
                          </span>
                          {Array.isArray(item.description) ? (
                            <ul className="list-inside list-disc font-light">
                              {item.description.map((des) => (
                                <li>{des}</li>
                              ))}
                            </ul>
                          ) : (
                            <span className="font-light">
                              {item.description}
                            </span>
                          )}
                        </div>
                        {item.technologies && (
                          <div className="flex gap-8 px-6">
                            {item.technologies.map((tech) => (
                              <figure className="flex flex-col items-center justify-center gap-1">
                                <span className="relative flex size-12 items-center justify-center">
                                  {tech.icon}
                                </span>
                                <figcaption className="font-bold">
                                  {tech.name}
                                </figcaption>
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
                </div>
              </div>
            </React.Fragment>
          ))}
        </section>
      </main>
    </>
  );
}
