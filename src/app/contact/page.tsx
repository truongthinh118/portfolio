import { Button, Link } from "@nextui-org/react";
import type { Metadata } from "next";
// import ContactMethod from "../components/contactmethod";
import MailForm from "../components/mailform";
import ContactMethodComponent from "../components/ContactMethodComponent";
import { FileIcon } from "../../../icon/FileIcon";

export const metadata: Metadata = {
  title: "Truong Thinh Contact",
  description: "Truong Thinh Portfolio",
};

export default function Home() {
  return (
    <main
      className="container mx-auto flex flex-col gap-8 px-8 py-16"
      style={{ minHeight: "calc(100vh - 4rem)" }}
    >
      <span className="w-min text-6xl font-bold sm:text-8xl">
        For further cooperation!
      </span>

      <div className="flex grow xl:flex-row">
        <section className="my-auto hidden w-full flex-col gap-8 xl:flex">
          <div className="flex flex-col gap-4">
            <span className="text-3xl font-light">Curriculum Vitae (CV)</span>
            <Button
              isIconOnly
              className="h-16 w-16 rounded-full bg-current text-inherit"
              href="/resume"
              as={Link}
              isExternal
            >
              <FileIcon className="h-10 fill-current text-white" />
            </Button>
          </div>
          <div className="space-y-4">
            <span className="text-3xl font-light">Contact me</span>
            <ContactMethodComponent
              base="gap-8"
              icon="h-10 text-white"
              button="h-16 w-16 bg-current rounded-full"
            />
          </div>
        </section>
        <section className="m-auto w-full">
          <MailForm />
        </section>
      </div>
    </main>
  );
}
