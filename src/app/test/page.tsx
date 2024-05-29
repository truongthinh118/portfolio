import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { UserIcon } from "@/components/icon/UserIcon";
import { CalendarIcon } from "@/components/icon/CalendarIcon";
import AladinIcon from "@/components/icon/AladinIcon";
import ImageModalComponent from "@/components/project/ImageModalComponent";
import DownloadAppComponent from "@/components/DownloadAppComponent";

export const metadata: Metadata = {
  title: "Aladin Projects",
  description: "Truong Thinh Portfolio",
};

export default function AladinPage() {
  return (
    <>
      <main className="container mx-auto my-16">
        <fieldset className="project-wrapper rounded-[5px] border border-foreground">
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
              <DownloadAppComponent
                googleLink="https://play.google.com/store/apps/details?id=com.aladinmobile.aladin"
                appleLink="https://apps.apple.com/us/app/aladin-finance/id1474783146"
                className="mt-2 w-full justify-evenly max-md:hidden"
              />
            </section>

            <DownloadAppComponent
              googleLink="https://play.google.com/store/apps/details?id=com.aladinmobile.aladin"
              appleLink="https://apps.apple.com/us/app/aladin-finance/id1474783146"
              className="md:hidden"
            >
              <Button
                as={Link}
                href={"https://aladin.finance/"}
                className="h-12 w-full bg-default-foreground sm:h-14"
              >
                <AladinIcon className="h-full" />
              </Button>
            </DownloadAppComponent>

            <section className="project-inner clear-left">
              <div className="project">
                <h2 className="text-content1-foreground">
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
                  className="mt-4 h-48 w-[95%] rounded-xl border-8 border-content1-foreground bg-content1-foreground max-lg:mx-auto max-lg:flex md:h-96 md:border-[15px] lg:w-1/2"
                  isFloat={false}
                />
              </div>

              <div className="project">
                <h2 className="text-content1-foreground">
                  Automatically synchronize data
                </h2>
                <span className="text-2xl">
                  My responsibility:
                  <p>
                    Develop an application to automatically synchronize data
                    from CRM applications to improve customer satisfaction.
                  </p>
                  Team size: 2
                </span>
              </div>

              <div className="project">
                <h2 className="text-content1-foreground">
                  Trading System Platform
                </h2>
                <span className="text-2xl">
                  My responsibility:
                  <p>
                    Provide to professional investors a platform for managing
                    the securities account portfolios entrusted by clients.
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
            </section>
          </article>
        </fieldset>
      </main>
    </>
  );
}
