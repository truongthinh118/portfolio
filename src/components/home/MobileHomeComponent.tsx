import { font } from "@/styles/font";
import ContactMethodComponent from "../ContactMethodComponent";
import { Divider } from "@nextui-org/react";
import AvatarComponent from "./AvatarComponent";
import IntroductionComponent from "./IntroductionComponent";
import StatComponent from "./StatComponent";

export default function HomeMobilePage() {
  return (
    <>
      <main
        className="container mx-auto flex flex-col gap-4 bg-default px-4 lg:hidden"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <h1
          className={`${font.poppins.className} py-2 text-[2.5rem] font-semibold leading-none text-content1-foreground`}
        >
          WELCOME TO
          <br /> MY WEBSITE!
        </h1>

        <section className="h-36 w-full">
          <div className="flex h-36 ">
            <div className="absolute z-10 size-36">
              <AvatarComponent className="size-full border-[0.5px] border-[#7A7673]" />
            </div>
            <div className="relative ml-[4.5rem] h-full w-[calc(100%-4.5rem)]">
              <span className="absolute z-0 size-full rounded-r-xl bg-[url('/background-2.jpeg')] bg-cover bg-[center_bottom_20%] bg-no-repeat opacity-30" />
              <div className="flex size-full py-2 pl-[4.5rem]">
                <div className="mx-auto flex flex-col items-center justify-between">
                  <article className="z-10 text-center">
                    <p
                      className="text-[5vw] font-bold"
                      style={{ lineHeight: "normal" }}
                    >
                      Truong Thinh
                    </p>
                    <p className="text-sm">Software Developer</p>
                    <Divider />
                  </article>
                  <ContactMethodComponent icon="z-10 h-6 text-background" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <StatComponent />

        <div className="flex flex-col gap-6 py-4">
          <IntroductionComponent />
        </div>
      </main>
    </>
  );
}
