"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { EnNavIcon } from "./icon/EnNavIcon";
import { ZhNavcon } from "./icon/ZhNavIcon";
import { usePathname } from "next/navigation";

interface LanguageMenuProps {
  lang?: string;
}

export default function LanguageMenu(props: LanguageMenuProps) {
  const itemClasses = "flex items-center gap-2";
  const iconClasses =
    "size-5 rounded-full dark:border-[0.5px] dark:border-content1-foreground";

  const lang: { [key: string]: JSX.Element } = {
    en: <EnNavIcon className={iconClasses} />,
    zh: <ZhNavcon className={iconClasses} />,
  };

  const pathname = usePathname();
  useEffect(() => {
    // console.log(pathname);
  });

  const [selectedKeys, setSelectedKeys] = useState("en");

  return (
    <>
      <Dropdown aria-label="language menu section" className="min-w-[20px]">
        <DropdownTrigger>
          <Button
            className="h-min min-h-min w-min min-w-min p-3"
            variant="light"
            disableRipple
          >
            {lang[selectedKeys]}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="language menu"
          variant="flat"
          selectionMode="single"
          hideSelectedIcon
          disallowEmptySelection
          selectedKeys={selectedKeys}
          onSelectionChange={(selected: any) => {
            setSelectedKeys(selected.currentKey);
          }}
        >
          <DropdownItem key="en" aria-label="en-language-lable">
            <Link href={"/"} className={itemClasses}>
              {" "}
              {lang.en} English (US)
            </Link>
          </DropdownItem>
          <DropdownItem key="zh" aria-label="cn-language-lable">
            <Link href={"/contact"} className={itemClasses}>
              {" "}
              {lang.zh} 中文 (简体)
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
