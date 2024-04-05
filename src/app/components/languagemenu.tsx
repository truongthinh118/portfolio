"use client";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

export default function LanguageMenu() {

    const itemClasses = "flex items-center gap-2";
    const iconClasses = "h-3.5 w-3.5 rounded-full";

    const lang: { [key: string]: JSX.Element } = {
        "en": <img src="en.svg" className={iconClasses} />,
        "cn": <img src="cn.svg" className={iconClasses} />
    }

    const [selectedKeys, setSelectedKeys] = useState(new Set(["en"]));

    const selectedValue = useMemo(
        () => {
            const key: string = Array.from(selectedKeys)[0];
            return lang[key]
        },
        [selectedKeys]
    );


    useEffect(()=>{
        var url = window.location.href;
        console.log(url);
    }, [selectedKeys])
    

    return (
        <>
            <Dropdown aria-label="dropdown menu section" className="min-w-[20px]">
                <DropdownTrigger >
                    <Button className="p-4 min-w-min" variant="light" disableRipple>
                        {selectedValue}
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
                        setSelectedKeys(selected)
                    }}
                >
                    <DropdownItem key="en" aria-label="en-language-lable">
                        <Link href={"/"} className={itemClasses}> {lang.en} English (US)</Link>
                    </DropdownItem>
                    <DropdownItem key="cn" aria-label="cn-language-lable">
                        <Link href={"/contact"} className={itemClasses}> {lang.cn} 中文 (繁體)</Link>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </>
    );
}
