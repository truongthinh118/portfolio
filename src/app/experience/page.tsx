import { Poppins } from "next/font/google";
import ExperienceComponent from "../../components/ExperienceComponent";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ExperiencePage() {
  return (
    <>
      <main
        className={`${poppins.className} grid grid-rows-11 bg-neutral-100`}
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
