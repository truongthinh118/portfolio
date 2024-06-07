"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { USLangIcon } from "../icon/USLangIcon";
import { CNLangIcon } from "../icon/CNLangIcon";
import {
  JavaIcon,
  JenkinsIcon,
  LinuxIcon,
  PostgreSQLIcon,
} from "../icon/LogoIcon";
import React from "react";

const progamming = [
  {
    name: "Java",
    icon: React.createElement(JavaIcon, { className: "h-6 fill-current" }),
  },
  {
    name: "Linux",
    icon: React.createElement(LinuxIcon, { className: "h-6 fill-current" }),
  },
  {
    name: "PostgreSQL",
    icon: React.createElement(PostgreSQLIcon, {
      className: "h-6 fill-current",
    }),
  },
  {
    name: "Jenkins",
    icon: React.createElement(JenkinsIcon, { className: "h-6 fill-current" }),
  },
];

const languages = [
  {
    name: "English",
    icon: React.createElement(USLangIcon, { className: "h-8" }),
  },
  {
    name: "Chinese",
    icon: React.createElement(CNLangIcon, { className: "h-8" }),
  },
];

export default function SkillsComponent() {
  return (
    <Accordion
      showDivider={false}
      itemClasses={{
        base: "border-b border-[#11111126]",
        title: "data-[open=true]:font-bold 2xl:text-2xl text-current",
        content: "flex flex-col gap-1 font-normal 2xl:text-2xl",
        indicator: "text-inherit",
      }}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}
    >
      <AccordionItem key="progamming" title="Progamming Skills">
        {progamming.map((item) => (
          <div key={item.name} className="flex gap-2">
            {item.icon}
            {item.name}
          </div>
        ))}
      </AccordionItem>
      <AccordionItem key="languages" title="Foreign Languages">
        {languages.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            {item.icon}
            {item.name}
          </div>
        ))}
      </AccordionItem>
    </Accordion>
  );
}
