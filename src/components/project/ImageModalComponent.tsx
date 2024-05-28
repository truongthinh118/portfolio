"use client";
import Image from "next/image";
import {
  ButtonProps,
  Modal,
  ModalBody,
  ModalContent,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";

type ImageModalComponentProps = {
  gallery: string[];
  defaultSelected: string;
  children: React.ReactElement<ButtonProps>;
};

export default function ImageModalComponent({
  gallery,
  defaultSelected,
  children,
}: ImageModalComponentProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [selected, setSelected] = React.useState<string | number>(
    defaultSelected,
  );

  const trigger = React.cloneElement(children, {
    onPress: onOpen,
  });

  return (
    <>
      {trigger}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="full"
        classNames={{
          base: "bg-transparent justify-center items-center",
          closeButton: "z-10 text-4xl m-4",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <Tabs
                placement="bottom"
                variant="light"
                classNames={{
                  base: `absolute bottom-4 left-1/2 -translate-x-1/2 ${gallery.length <= 1 ? "hidden" : ""}`,
                  tabList: "h-max",
                  tab: "h-max w-max",
                  tabContent: "h-16 w-16",
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
                    <ModalBody className="relative h-[25dvh] w-[90svw] min-w-[60dvw] p-0 lg:h-[60dvh] lg:max-w-5xl">
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
