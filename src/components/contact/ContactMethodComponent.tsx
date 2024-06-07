import { Button, Link } from "@nextui-org/react";
import { twMerge } from "tailwind-merge";
import { GithubIcon, LinkedinIcon } from "../icon/LogoIcon";
import EnvelopeIcon from "../icon/EnvelopeIcon";
import React from "react";

export default function ContactMethodComponent({
  base,
  icon,
  button,
}: {
  base?: string;
  icon?: string;
  button?: string;
}) {
  const iconClass = twMerge("h-8 fill-current", icon);
  const buttonClass = twMerge("bg-inherit ", button);

  const contactMethods = [
    {
      name: "linkedin",
      icon: React.createElement(LinkedinIcon, { className: iconClass }),
      href: "https://www.linkedin.com/in/thinhdtt/",
    },
    {
      name: "github",
      icon: React.createElement(GithubIcon, { className: iconClass }),
      href: "https://github.com/truongthinh118",
    },
    {
      name: "email",
      icon: React.createElement(EnvelopeIcon, { className: iconClass }),
      href: "mailto:truongthinh118001@gmail.com",
    },
  ];

  return (
    <div className={twMerge("flex gap-2", base)}>
      {contactMethods.map((item) => (
        <Button
          key={item.name}
          isIconOnly
          className={buttonClass}
          href={item.href}
          as={Link}
          isExternal
        >
          {item.icon}
        </Button>
      ))}
    </div>
  );
}
