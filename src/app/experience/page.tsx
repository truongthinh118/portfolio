import { font } from "@/assets/font";
import ProjectSlider from "@/components/project/ProjectSlider";
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
      >
        <div className="row-span-2 flex lg:row-span-3">
          <h1 className="page-title m-auto py-12 font-semibold leading-none">
            MY EXPERIENCE
          </h1>
        </div>
        <div className="row-span-1 lg:hidden"></div>
        <div className="row-span-4 lg:row-span-8">
          <ProjectSlider />
        </div>
      </main>
    </>
  );
}
