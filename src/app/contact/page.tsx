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
      className="container mx-auto flex flex-col justify-evenly gap-8 p-8"
      style={{ minHeight: "calc(100vh - 4rem)" }}
    >
      <div className="w-min text-8xl font-bold">For further cooperation!</div>

      <div className="flex xl:flex-row">
        <section className="hidden w-full flex-col gap-8 xl:flex">
          <div className="flex flex-col gap-4">
            <span className="text-3xl font-light">Curriculum Vitae (CV)</span>
            <Button
              isIconOnly
              className="h-16 w-16 rounded-full bg-current text-inherit"
              href=""
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
        <div className="w-full">
          <MailForm />
        </div>
      </div>
    </main>
  );
}
