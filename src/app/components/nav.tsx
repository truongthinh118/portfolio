"use client";
import React, { useEffect } from "react";
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
import LanguageMenu from "./languagemenu";

export default function Navigator() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [location, setLocation] = React.useState("");

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

  useEffect(() => {
    var location = window.location.pathname;
    setLocation(location);
  }, []);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        wrapper: "max-w-full",
      }}
      isBlurred
    >
      <NavbarBrand onClick={() => setLocation("")}>
        <Link href={"/"}>
          <img
            src="logo.svg"
            className="h-12 transition-all ease-in-out hover:scale-125"
          />
        </Link>
      </NavbarBrand>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="end">
        {menuItems.map((item) => (
          <NavbarItem
            key={item.key}
            isActive={item.href == location}
            onClick={() => setLocation(item.href)}
          >
            <Link href={item.href}>{item.name}</Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <LanguageMenu lang="en" />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.key} onClick={() => setIsMenuOpen(false)}>
            <Link className="w-full" href={item.href}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
