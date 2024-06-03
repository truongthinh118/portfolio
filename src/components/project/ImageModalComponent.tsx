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
import React from "react";
import { twMerge } from "tailwind-merge";

interface ImageModalComponentProps extends ButtonProps {
  gallery: string[];
  defaultSelected: string;
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

  const [selected, setSelected] = React.useState<string | number>(
    defaultSelected,
  );

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
          src={defaultSelected}
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
                onSelectionChange={setSelected}
              >
                {gallery.map((item) => (
                  <Tab
                    key={item}
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
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
