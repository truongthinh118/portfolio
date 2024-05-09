import { Card } from "@nextui-org/react";
import ProfileComponent from "./components/ProfileComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative hidden lg:grid grid-cols-8 xl:grid-cols-7 grid-rows-5 gap-2.5 p-2.5 bg-neutral-100" style={{ minHeight: 'calc(100vh - 4rem)' }}>
      <div className="col-span-3 xl:col-span-2 row-span-5">
        <ProfileComponent />
      </div>

      <div className="relative col-span-5 row-span-2">
        <span className="absolute z-0 h-full w-full opacity-30 bg-cover bg-no-repeat bg-[center_bottom_20%] bg-[url('/background-2.jpeg')]" />
        
        <div className="relative h-full flex flex-col z-10">
          <div className="flex flex-col h-full p-8 text-8xl font-semibold text-[#5F5B59] justify-center">
            <p>WELCOME TO</p>
            <p>MY WEBSITE!</p>
          </div>
          <div className="flex h-16	w-full bg-[#ECE8E5] divide-x divide-[#BDBBBB]">
            <div className="flex w-full items-end justify-center py-2">
              <span className="text-5xl font-bold">
                2+{" "}
              </span>
              <span className="text-2xl font-light">years experience</span>
            </div>
            <div className="flex w-full items-end justify-center py-2">
              <span className="text-5xl font-bold">
                10+{" "}
              </span>
              <span className="text-2xl font-light">completed projects</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-5 row-span-3 px-10 flex">
        <div className="flex flex-col h-full justify-evenly gap-6 m-auto py-4">
          <Card className="border border-[#7A7673] rounded-md shadow-md overflow-visible text-inherit">
            <span className="absolute top-[50%] -translate-y-1/2 -translate-x-1/2 rounded-full p-1 bg-gradient-to-r from-neutral-100 from-50% via-transparent via-50%">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-20">z
                <path fill="#e33146" d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
              </svg>
            </span>

            <span className="absolute left-12 px-1 text-3xl font-bold -translate-y-1/2 bg-gradient-to-b from-neutral-100 from-50% via-transparent via-50%">
              Objectives
            </span>

            <div className="objectives gap-6">
              <span>
                Short term:
                <p>
                  Aspire to work as a Software Developer over the next four years in a prestigious company.
                </p>
              </span>
              <span>
                Long-term:
                <p>
                  Evolve into a seasoned professional engineer who makes a lasting impact.
                </p>
              </span>
            </div>
          </Card>

          <Card className="border border-[#7A7673] rounded-md shadow-md overflow-visible text-inherit">
            <span className="absolute top-[50%] -translate-y-1/2 -translate-x-1/2 p-1 rounded-full bg-gradient-to-r from-neutral-100 from-50% via-transparent via-50%">
              <Image src={'/logo-uel.png'} className="rounded-full" width={80} height={80} alt=""/>
            </span>

            <span className="absolute left-12 px-1 text-3xl font-bold -translate-y-1/2 bg-gradient-to-b from-neutral-100 from-50% via-transparent via-50%">
              Education
            </span>

            <div className="objectives gap-6">
              <p>University of Economics and Law - Vietnam National University HCMC</p>
              <p>Bachelor - Applied Mathematics in Economics, Management and Finance</p>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
