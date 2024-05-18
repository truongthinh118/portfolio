import { Card } from "@nextui-org/react";
import ProfileComponent from "../ProfileComponent";
import Image from "next/image";
import IntroductionComponent from "./IntroductionComponent";
import StatComponent from "./StatComponent";

export default function DesktopHomePage() {
  return (
    <>
      <main
        className="relative hidden grid-cols-7 grid-rows-5 gap-2.5 bg-default p-2.5 lg:grid"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <div className="col-span-2 row-span-5">
          <ProfileComponent />
        </div>

        <div className="relative col-span-5 row-span-2">
          <span className="absolute z-0 size-full bg-[url('/background-2.jpeg')] bg-cover bg-[center_bottom_20%] bg-no-repeat opacity-30 dark:bg-[url('/welcome-background-dark.png')] dark:bg-bottom" />

          <div className="relative z-10 flex h-full flex-col">
            <div className="flex h-full flex-col justify-center px-8 font-semibold text-content2-foreground dark:text-foreground lg:text-6xl 2xl:text-8xl">
              <p>WELCOME TO</p>
              <p>MY WEBSITE!</p>
            </div>

            <StatComponent />
          </div>
        </div>

        <div className="col-span-5 row-span-3 flex px-10">
          <div className="m-auto flex h-full flex-col justify-evenly gap-6 py-4">
            <IntroductionComponent />
          </div>
        </div>
      </main>
    </>
  );
}
