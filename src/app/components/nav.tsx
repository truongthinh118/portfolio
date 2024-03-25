"use client";

import Link from "next/link";
import {useEffect} from "react";

export default function Navigation() {
    useEffect(() => {
        let path = window.location.pathname;
        console.log(path)

        const toggleDropdown = () => {
            const dropdownMenu = document.getElementById("language-dropdown-menu");
            if (dropdownMenu) {
                dropdownMenu.classList.toggle("hidden");
            }
        };

        const button = document.getElementById("dropdown-button");
        if (button) {
            button.addEventListener("click", toggleDropdown);
        }

        return () => {
            if (button) {
                button.removeEventListener("click", toggleDropdown);
            }
        };
    }, []);


    return (
        <header className="fixed inset-x-0 border-b border-transparent">
            <div className="container flex items-center justify-between p-3 mx-auto">
                <Link href={"/"}>
                    <img id="logo" src="logo.svg"  alt="logo" className="h-20" />
                </Link>
                <div className="flex justify-between gap-6 text-xl">
                    <Link href={"/projects"} className=" hover:text-[#50577A]">
                        Information
                    </Link>
                    <Link href={"/projects"} className=" hover:text-[#50577A]">
                        Projects
                    </Link>
                    <Link href={"/contact"} className=" hover:text-[#50577A]">
                        Contact
                    </Link>
                </div>

                <div>
                    <button id="dropdown-button" type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center justify-center px-4 py-2 dark:text-white rounded-lg cursor-default hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <img src="en.svg" className="h-3.5 w-3.5 rounded-full me-2" />
                        English (US)
                    </button>

                    <div className="hidden my-4 bg-white list-none divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="language-dropdown-menu">
                        <ul className="py-2" role="none">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                    <div className="inline-flex items-center">
                                        <img src="en.svg" className="h-3.5 w-3.5 rounded-full me-2" />
                                        English (US)
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                    <div className="inline-flex items-center">
                                        <img src="cn.svg" className="h-3.5 w-3.5 rounded-full me-2" />
                                        中文 (繁體)
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

        </header>
    );
}
