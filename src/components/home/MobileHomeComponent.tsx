import { font } from "@/styles/font";
import Image from "next/image";
import ContactMethodComponent from "../ContactMethodComponent";
import { Card, Divider } from "@nextui-org/react";

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
              <Image
                src={"/self.jpeg"}
                alt=""
                width={144}
                height={144}
                style={{ width: "144px", height: "144px" }}
                className="rounded-full object-none"
              />
            </div>
            <div className="relative ml-[4.5rem] h-full w-[calc(100%-4.5rem)]">
              <span className="absolute z-0 size-full rounded-r-xl bg-[url('/background-2.jpeg')] bg-cover bg-[center_bottom_20%] bg-no-repeat opacity-30" />
              <div className="flex size-full py-2 pl-[4.5rem]">
                <div className="mx-auto flex flex-col items-center justify-between">
                  <article className="text-center">
                    <p className="text-2xl font-bold">Truong Thinh</p>
                    <p className="text-sm">Software Developer</p>
                    <Divider />
                  </article>
                  <ContactMethodComponent icon="h-6 text-background" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex w-full divide-x divide-[#BDBBBB] rounded-[5px] bg-content1-foreground text-content1">
          <div className="w-full py-1 text-center">
            <span className="text-3xl font-bold xl:text-5xl">
              2+ <span className="text-tiny font-light">years experience</span>
            </span>
          </div>
          <div className="w-full py-1 text-center">
            <span className="text-3xl font-bold xl:text-5xl">
              10+{" "}
              <span className="text-tiny font-light">completed projects</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6 py-4">
          <Card className="overflow-visible rounded-md border border-content1-foreground shadow-md">
            <span className="absolute bottom-0 right-8 translate-y-1/2 rounded-full bg-gradient-to-t from-default from-50% via-transparent via-50% p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-7"
              >
                <path
                  fill="#e33146"
                  d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                />
              </svg>
            </span>

            <span className="absolute left-[50%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-default from-50% via-transparent via-50% px-1 font-bold text-content1-foreground">
              Objectives
            </span>

            <div className="objectives px-2 pb-6 pt-3 text-sm">
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
            <span className="absolute bottom-0 right-8 translate-y-1/2 rounded-full bg-gradient-to-t from-default from-50% via-transparent via-50% p-1">
              <Image
                src={"/logo-uel.png"}
                className="rounded-full"
                width={28}
                height={28}
                style={{ height: "28px", width: "28px" }}
                alt=""
              />
            </span>

            <span className="absolute left-[50%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-default from-50% via-transparent via-50% px-1 font-bold text-content1-foreground">
              Education
            </span>

            <div className="objectives px-2 pb-6 pt-3 text-sm">
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
      </main>
    </>
  );
}
