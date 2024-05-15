"use client";
import { useState } from "react";
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

interface LanguageMenuProps {
  lang?: string;
}

export default function LanguageMenu(props: LanguageMenuProps) {
  const itemClasses = "flex items-center gap-2";
  const iconClasses = "h-3.5 w-3.5 rounded-full";

  const lang: { [key: string]: JSX.Element } = {
    en: <EnNavIcon className={iconClasses} />,
    zh: <ZhNavcon className={iconClasses} />,
  };

  const [selectedKeys, setSelectedKeys] = useState("en");

  return (
    <>
      <Dropdown aria-label="dropdown menu section" className="min-w-[20px]">
        <DropdownTrigger>
          <Button className="min-w-min p-4" variant="light" disableRipple>
            {lang[selectedKeys]}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
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
