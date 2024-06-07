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
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import Logo from "./icon/Logo";

export default function Navigator() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = usePathname();

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;

    if (href !== "/" && location !== "/") return location.startsWith(href);

    return false;
  };

  type menuItem = {
    key: string;
    name: string;
    href: string;
  };

  const menuItems: menuItem[] = [
    { name: "Home", href: "/", key: "home" },
    { name: "Experience", href: "/experience", key: "experience" },
    { name: "Contact", href: "/contact", key: "contact" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: "bg-white/[.7] dark:bg-default-600/[.7]",
        wrapper: "max-w-full",
      }}
      isBlurred
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(-100%)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s ease-in-out 0s",
      }}
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
          {/* <Logo className="h-full" /> */}
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden gap-8 sm:flex" justify="end">
        {menuItems.map((item) => (
          <NavbarItem key={item.key} isActive={isActive(item.href)}>
            <Link href={item.href}>{item.name}</Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden">
          <LanguageMenu lang="en" />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarItem className="hidden">
          <LanguageMenu lang="en" />
        </NavbarItem>

        <NavbarItem>
          <ThemeSwitch />
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
            isActive={isActive(item.href)}
          >
            <Link href={item.href}>{item.name}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
