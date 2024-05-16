import { Card } from "@nextui-org/react";
import ProfileComponent from "../components/ProfileComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="relative hidden grid-cols-7 grid-rows-5 gap-2.5 bg-default p-2.5 lg:grid"
      style={{ minHeight: "calc(100vh - 4rem)" }}
    >
      <div className="col-span-2 row-span-5">
        <ProfileComponent />
      </div>

      <div className="relative col-span-5 row-span-2">
        <span className="absolute z-0 size-full bg-[url('/background-2.jpeg')] bg-cover bg-[center_bottom_20%] bg-no-repeat opacity-30" />

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex h-full flex-col justify-center px-8 font-semibold text-[#5F5B59] lg:text-6xl 2xl:text-8xl">
            <p>WELCOME TO</p>
            <p>MY WEBSITE!</p>
          </div>
          <div className="flex h-16	w-full divide-x divide-[#BDBBBB] bg-background">
            <div className="flex w-full items-end justify-center py-2">
              <span className="text-3xl font-bold xl:text-5xl">2+ </span>
              <span className="text-lg font-light">years experience</span>
            </div>
            <div className="flex w-full items-end justify-center py-2">
              <span className="text-3xl font-bold xl:text-5xl">10+ </span>
              <span className="text-lg font-light">completed projects</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-5 row-span-3 flex px-10">
        <div className="m-auto flex h-full flex-col justify-evenly gap-6 py-4">
          <Card className="overflow-visible rounded-md border border-[#7A7673] shadow-md">
            <span className="absolute top-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-neutral-100 from-50% via-transparent via-50% p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-20"
              >
                <path
                  fill="#e33146"
                  d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                />
              </svg>
            </span>

            <span className="absolute left-12 -translate-y-1/2 bg-gradient-to-b from-neutral-100 from-50% via-transparent via-50% px-1 text-3xl font-bold">
              Objectives
            </span>

            <div className="objectives text-content1-foreground">
              <span>
                Short term:
                <p>
                  Aspire to work as a Software Developer over the next four
                  years in a prestigious company.
                </p>
              </span>
              <span>
                Long-term:
                <p>
                  Evolve into a seasoned professional engineer who makes a
                  lasting impact.
                </p>
              </span>
            </div>
          </Card>

          <Card className="overflow-visible rounded-md border border-[#7A7673] shadow-md">
            <span className="absolute top-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-neutral-100 from-50% via-transparent via-50% p-1">
              <Image
                src={"/logo-uel.png"}
                className="rounded-full"
                width={80}
                height={80}
                alt=""
              />
            </span>

            <span className="absolute left-12 -translate-y-1/2 bg-gradient-to-b from-neutral-100 from-50% via-transparent via-50% px-1 text-3xl font-bold">
              Education
            </span>

            <div className="objectives text-content1-foreground">
              <span>
                University of Economics and Law - Vietnam National University
                HCMC
                <p>
                  Bachelor - Applied Mathematics in Economics, Management and
                  Finance
                </p>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
