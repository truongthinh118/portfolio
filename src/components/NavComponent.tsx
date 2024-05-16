"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import LanguageMenu from "./LanguageMenuComponent";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigator() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = usePathname();

  type menuItem = {
    key: string;
    name: string;
    href: string;
  };

  const menuItems: menuItem[] = [
    { name: "Experience", href: "/experience", key: "experience" },
    { name: "Projects", href: "/projects", key: "project" },
    { name: "Contact", href: "/contact", key: "contact" },
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: "bg-white/[.7]",
        wrapper: "max-w-full",
      }}
      isBlurred
    >
      <NavbarBrand>
        <Link href={"/"} className="relative h-12 w-24">
          <Image
            alt=""
            fill
            src="/logo.svg"
            className="transition-all ease-in-out hover:scale-125"
            priority
          />
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden gap-8 sm:flex" justify="end">
        {menuItems.map((item) => (
          <NavbarItem key={item.key} isActive={item.href == location}>
            <Link href={item.href}>{item.name}</Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <LanguageMenu lang="en" />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <LanguageMenu lang="en" />
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem
            key={item.key}
            onClick={() => setIsMenuOpen(false)}
            isActive={item.href == location}
          >
            <Link href={item.href}>{item.name}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
