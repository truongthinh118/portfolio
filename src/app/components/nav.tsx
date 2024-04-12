'use client';
import React from "react";
import Link from "next/link"
import { Navbar, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem } from "@nextui-org/react";
import LanguageMenu from "./languagemenu"


export default function Navigator() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    type menuItem = {
        key: string;
        name: string;
        href: string;
    }

    const menuItems: menuItem[] = [
        { name: "About me", href: "/about",key: "about-me"},
        { name: "Projects", href: "/projects", key: "project" },
        { name: "Contact", href: "/contact", key:"contact" },
    ];

    const [location, setLocation] = React.useState<React.Key>("");

    
    return (
        <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="sm:hidden" justify="end">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                {menuItems.map((item,index) => (
                    <NavbarItem key={item.key} isActive={item.key == location} onClick={() => setLocation(item.key)}>
                        <Link href={item.href}>{item.name}</Link>
                    </NavbarItem>
                ))}
                <NavbarItem>
                    <LanguageMenu lang="en" />
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu style={{marginTop: '1.5rem'}}>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={item.key} onClick={()=>setIsMenuOpen(false)}>
                        <Link
                            className="w-full"
                            href={item.href}
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}