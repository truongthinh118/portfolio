import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import ExperienceIntoduction from "@/components/project/ExperienceIntroComponent";
import { redirect } from "next/navigation";
import ExperienceProject from "@/components/project/ExperienceProjectComponent";
import ExperienceSideRole from "@/components/project/ExperienceSideRoleComponent";
import { experienceData } from "@/lib/experience-data";

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}): Promise<Metadata> {
  const data = experienceData[params.name];

  if (data === undefined) redirect("/experience");

  return {
    title: `${data.fullname} Experience`,
  };
}

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
      <main className="container mx-auto my-16 scroll-smooth">
        <fieldset className="project-wrapper rounded-[5px] border border-foreground">
          <legend className="project-title ml-4 px-1 sm:ml-16">
            <Link href={data.web} target="_blank">
              {data.fullname}
            </Link>
          </legend>
          <article className="px-4 py-8 text-justify sm:py-8 lg:px-12">
            <section className="relative z-20 mx-auto md:ml-4 md:mr-4 lg:float-right lg:ml-24">
              <ExperienceIntoduction data={data} />
            </section>

            <section className="project-inner md:clear-left">
              {data.project.map((item, index) => {
                const galleryPosition =
                  galleryList.indexOf(item.name) % 2 === 0;
                return (
                  <ExperienceProject
                    key={index}
                    item={item}
                    index={index}
                    galleryPosition={galleryPosition ? "left" : "right"}
                    isLast={index === data.project.length - 1}
                  />
                );
              })}

              {!!data.otherRoles &&
                data.otherRoles.map((item, index) => (
                  <ExperienceSideRole key={index} item={item} />
                ))}
            </section>
          </article>
        </fieldset>
      </main>
    </>
  );
}
