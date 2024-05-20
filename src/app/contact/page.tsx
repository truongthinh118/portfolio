import { Button, Link } from "@nextui-org/react";
import type { Metadata } from "next";
import MailForm from "@/components/MailFormComponent";
import ContactMethodComponent from "@/components/ContactMethodComponent";
import { FileIcon } from "@/components/icon/FileIcon";

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
      <span className="w-min text-[3.5rem] font-bold leading-none sm:text-8xl">
        For further cooperation!
      </span>

      <div className="flex grow xl:flex-row">
        <section className="my-auto hidden w-full flex-col gap-8 lg:flex">
          <div className="flex flex-col gap-4">
            <span className="text-3xl font-light">Curriculum Vitae (CV)</span>
            <Button
              isIconOnly
              className="h-16 w-16 rounded-full bg-current"
              href="/resume"
              as={Link}
              isExternal
            >
              <FileIcon className="h-10 fill-current text-default" />
            </Button>
          </div>
          <div className="space-y-4">
            <span className="text-3xl font-light">Contact me</span>
            <ContactMethodComponent
              base="gap-8"
              icon="h-10 text-default"
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
