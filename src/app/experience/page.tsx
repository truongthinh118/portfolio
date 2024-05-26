import { font } from "@/styles/font";
import { Metadata } from "next";
import ProjectSlider from "@/components/ProjectSlider";

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
          <h1 className="m-auto py-12 text-[clamp(2.813rem,3.208vw+2.151rem,6rem)] font-semibold leading-none">
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
