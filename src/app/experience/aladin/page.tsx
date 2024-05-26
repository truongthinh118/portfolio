import Image from "next/image";
import { Button } from "@nextui-org/react";
import { UserIcon } from "@/components/icon/UserIcon";
import { CalendarIcon } from "@/components/icon/CalendarIcon";
import Link from "next/link";
import ImageModalComponent from "@/components/project/ImageModalComponent";
import AladinIcon from "@/components/icon/AladinIcon";
import { Metadata } from "next";
import DownloadAppComponent from "@/components/DownloadAppComponent";

export const metadata: Metadata = {
  title: "Aladin Projects",
  description: "Truong Thinh Portfolio",
};

export default function AladinPage() {
  return (
    <>
      <main
        className="container mx-auto my-16"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <fieldset className="project-inner rounded-[5px] border border-foreground">
          <legend className="project-title ml-4 px-1 sm:ml-16">
            <Link href={"https://aladin.finance/"} target="_blank">
              Aladin Finance
            </Link>
          </legend>
          <article className="p-8 text-justify">
            <section className="mx-auto flex flex-row-reverse items-center justify-between gap-1 pb-4 md:float-right md:ml-12 md:mr-4 md:flex-col lg:ml-24">
              <div className="flex h-full flex-col justify-evenly">
                <div className="flex flex-row items-center gap-2 lg:gap-4">
                  <UserIcon className="h-3 fill-current text-current sm:h-10 sm:p-2" />
                  <span className="text-sm font-light xs:text-lg 2xl:text-2xl ">
                    Role: Backend Developer
                  </span>
                </div>

                <div className="flex flex-row items-center gap-2 lg:gap-4">
                  <CalendarIcon className="h-3 fill-current text-current sm:h-10 sm:p-2" />
                  <span className="text-sm font-light xs:text-lg  2xl:text-2xl">
                    Duration: Nov 2021 - Oct 2022
                  </span>
                </div>
              </div>

              <Button
                className="h-16 min-h-16 min-w-max max-w-max bg-neutral-100 sm:h-24 sm:min-h-24 md:h-48 md:min-h-48 md:min-w-full"
                isIconOnly
                href="https://aladin.finance/"
                as={Link}
                target="_blank"
              >
                <AladinIcon className="h-full w-auto p-2" />
              </Button>
            </section>
            <DownloadAppComponent />
            {/* <section className="project-inner flex flex-col gap-2"> */}
            <div className="project">
              <h2 className="my-4 text-left text-content1-foreground">
                Automated news aggregation system
              </h2>
              <span className="text-2xl">
                My responsibility:
                <p>
                  Build an automated news aggregation system from multiple
                  sources for efficiently processing and storing data to save
                  time and effort.{" "}
                </p>
                Team size: 2
              </span>
              <br />
              <ImageModalComponent
                gallery={["/aladin.png"]}
                defaultSelected="/aladin.png"
              >
                <Button
                  className="mt-4 h-48 w-[95%] rounded-xl border-8 border-content1-foreground bg-content1-foreground max-lg:mx-auto max-lg:flex md:h-96 md:border-[15px] lg:w-[50%]"
                  isIconOnly
                >
                  <Image
                    src={"/aladin.png"}
                    fill
                    alt=""
                    className="rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </Button>
              </ImageModalComponent>
            </div>

            <div className="project">
              <h2 className="my-4 text-left text-content1-foreground md:text-5xl">
                Automatically synchronize data
              </h2>
              <span className="text-2xl">
                My responsibility:
                <p>
                  Develop an application to automatically synchronize data from
                  CRM applications to improve customer satisfaction.
                </p>
                Team size: 2
              </span>
            </div>

            <div className="project">
              <h2 className="my-4 text-left text-content1-foreground md:text-5xl">
                Automatically synchronize data
              </h2>
              <span className="text-2xl">
                My responsibility:
                <p>
                  Develop an application to automatically synchronize data from
                  CRM applications to improve customer satisfaction.
                </p>
                Team size: 2
              </span>
            </div>

            <div className="project">
              <h2 className="my-4 text-left text-content1-foreground md:text-5xl">
                Trading System Platform
              </h2>
              <span className="text-2xl">
                My responsibility:
                <p>
                  Provide to professional investors a platform for managing the
                  securities account portfolios entrusted by clients.
                  <br />
                  Create great experience to customer by simultaneously making
                  orders on several securities accounts entrusted by clients
                  from numerous securities companies.
                  <br />
                  Calculate customer profit and loss, commissions and trading
                  fee for investors.
                </p>
                Team size: 3
              </span>
            </div>
            {/* </section> */}
          </article>
        </fieldset>
      </main>
    </>
  );
}
