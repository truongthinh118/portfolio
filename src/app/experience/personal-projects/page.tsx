import MobilePersonalProject from "@/components/project/MobilePersonalProject";
import PersonalProjectCard from "@/components/project/PersonalProjectCardComponent";
import { projects } from "@/lib/personal-project-data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Personal Projects",
  description: "Truong Thinh Portfolio",
};

export default function PersonalProjectPage() {
  const data = projects;

  return (
    <>
      <main className="container m-auto flex flex-col">
        <h1 className="page-title my-8 w-full text-center font-semibold leading-none sm:my-12 ">
          PERSONAL PROJECTS
        </h1>
        <section className="flex h-full grow flex-col sm:my-8">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <div className="personal-project flex sm:divide-x-2 sm:divide-foreground">
                <div className="flex w-2/12 items-center justify-center px-1 py-8 max-sm:hidden">
                  <span className="personal-project-time flex aspect-square w-full max-w-48 items-center justify-center rounded-full border border-content4-foreground bg-content4 font-bold text-content4-foreground">
                    {item.time}
                  </span>
                </div>

                <div
                  className="relative w-full py-4 sm:py-8"
                  style={{ perspective: "2000px" }}
                >
                  {(index === 0 || index === data.length - 1) && (
                    <span
                      className={`absolute left-0 max-sm:hidden ${index === 0 ? "top-0 -translate-y-1/2" : "bottom-0 translate-y-1/2"} size-4 -translate-x-[calc(50%+1px)] rounded-full bg-content4-foreground`}
                    />
                  )}

                  <PersonalProjectCard item={item} index={index} />
                  {/* <MobilePersonalProject item={item} index={index} /> */}
                </div>
              </div>
            </React.Fragment>
          ))}
        </section>
      </main>
    </>
  );
}
