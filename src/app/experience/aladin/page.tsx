"use client";
import Image from "next/image";
import { Button, Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { UserIcon } from "@/components/icon/UserIcon";
import { CalendarIcon } from "@/components/icon/CalendarIcon";
import Link from "next/link";

export default function AladinPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <main
        className="container mx-auto my-16"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <fieldset className="rounded-[5px] border border-foreground">
          <legend className="ml-16 px-1 text-7xl font-bold">
            <Link href={"https://aladin.finance/"} target="_blank">
              Aladin Finance
            </Link>
          </legend>
          <article className="p-8 text-justify">
            <section className="float-right ml-24 mr-4 flex flex-col justify-between gap-1 pb-4">
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
                className="h-16 min-h-16 w-full min-w-full bg-neutral-100  sm:h-24 sm:min-h-24 xl:h-48 xl:min-h-48"
                isIconOnly
                href="https://aladin.finance/"
                as={Link}
                target="_blank"
              >
                <Image
                  className="p-2"
                  src="/aladin-logo.svg"
                  alt="Aladin"
                  fill
                />
              </Button>
            </section>
            <section className="project-inner flex flex-col gap-2">
              <div className="project">
                <h2 className="my-4 text-5xl text-content1-foreground">
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
                <Button
                  className="mt-4 h-96 w-[65%] rounded-xl border-[15px] border-content1-foreground bg-content1-foreground"
                  isIconOnly
                  onPress={onOpen}
                >
                  <Image
                    src={"/aladin.png"}
                    fill
                    alt=""
                    className="rounded-lg"
                  />
                </Button>
                <Modal
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  backdrop="blur"
                  size="5xl"
                >
                  <ModalContent>
                    {() => (
                      <>
                        <div className="relative h-[60dvh] w-full">
                          <Image
                            src={"/aladin.png"}
                            fill
                            alt=""
                            className="rounded-lg"
                          />
                        </div>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </div>

              <div className="project">
                <h2 className="my-4 text-5xl text-content1-foreground">
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
                <h2 className="my-4 text-5xl text-content1-foreground">
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
                <h2 className="my-4 text-5xl text-content1-foreground">
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
