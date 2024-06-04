"use client";
import Image from "next/image";
import {
  Button,
  ButtonProps,
  Modal,
  ModalBody,
  ModalContent,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import React, { Key } from "react";
import { twMerge } from "tailwind-merge";

interface ImageModalComponentProps extends ButtonProps {
  gallery: string[];
  defaultSelected: number;
  isFloat: boolean;
  floatPosition?: string;
  imageClass?: string;
}

export default function ImageModalComponent({
  gallery,
  defaultSelected,
  className,
  imageClass,
  isFloat,
  floatPosition,
  ...props
}: ImageModalComponentProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [selected, setSelected] = React.useState<number>(defaultSelected);

  return (
    <>
      <Button
        className={twMerge(
          `
            m-4 h-fit w-fit
            rounded-xl border-8 border-content1-foreground bg-content1-foreground
            max-lg:mx-auto max-lg:flex md:border-[15px] 
            ${isFloat ? (floatPosition === "left" ? "lg:float-left lg:max-w-[45%]" : "lg:float-right lg:max-w-[45%]") : ""}
          `,
          className,
        )}
        isIconOnly
        onPress={onOpen}
        {...props}
      >
        <Image
          src={gallery[defaultSelected]}
          // fill
          alt=""
          className={twMerge(
            "size-auto max-h-[75svh] rounded-lg object-cover",
            imageClass,
          )}
          width="0"
          height="0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="blur"
        size="5xl"
        classNames={{
          base: "bg-transparent justify-center items-center shadow-none	",
          closeButton: "fixed top-0 right-0 z-10 text-4xl m-4",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <Tabs
                placement="bottom"
                variant="light"
                classNames={{
                  base: `fixed bottom-4 left-1/2 -translate-x-1/2 ${gallery.length <= 1 ? "hidden" : ""}`,
                  tabList: "h-max",
                  tab: "h-max w-max",
                  tabContent: "h-16 w-16",
                  wrapper: "w-full",
                }}
                selectedKey={selected}
                onSelectionChange={(e: Key) => {
                  setSelected(e as number);
                }}
              >
                {gallery.map((item, index) => (
                  <Tab
                    key={index}
                    title={
                      <Image
                        src={item}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      ></Image>
                    }
                  >
                    <ModalBody className="relative h-[75dvh] w-full p-0">
                      <Image
                        src={item}
                        fill
                        alt=""
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="rounded-lg object-contain"
                      />
                    </ModalBody>
                  </Tab>
                ))}
              </Tabs>

              {/* <div className="fixed left-0 top-0">{selected}</div> */}
              {/* {gallery.length > 1 && (
                <>
                  {selected > 0 && (
                    <Button
                      className="fixed left-4 top-1/2 -translate-y-1/2 bg-transparent"
                      radius="full"
                      size="lg"
                      isIconOnly
                      onClick={() => setSelected((pre) => pre - 1)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 512"
                        fill="currentColor"
                        className="h-12"
                      >
                        <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
                      </svg>
                    </Button>
                  )}
                  {selected < gallery.length - 1 && (
                    <Button
                      className="fixed right-4 top-1/2 -translate-y-1/2 bg-transparent"
                      radius="full"
                      size="lg"
                      isIconOnly
                      onClick={() => setSelected((pre) => pre + 1)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 512"
                        fill="currentColor"
                        className="h-12"
                      >
                        <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                      </svg>
                    </Button>
                  )}
                </>
              )} */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
