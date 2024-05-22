import { font } from "@/styles/font";
import ExperienceComponent from "@/components/ExperienceComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Truong Thinh Experience",
  description: "Truong Thinh Portfolio",
};

export default function ExperiencePage() {
  return (
    <>
      <main
        className={`${font.poppins.className} grid grid-rows-11 bg-default`}
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <div className="row-span-2 flex lg:row-span-3">
          <h1 className="m-auto py-10 text-5xl font-semibold sm:text-6xl lg:text-8xl">
            MY EXPERIENCE
          </h1>
        </div>
        <div className="row-span-8 lg:row-span-5">
          <ExperienceComponent />
        </div>
      </main>
    </>
  );
}
