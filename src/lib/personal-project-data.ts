import {
  JSIcon,
  JavaFillIcon,
  NextJSIcon,
  TailwindCSSIcon,
} from "@/components/icon/LogoIcon";
import React from "react";

export const projects: ProjectProps[] = [
  {
    name: "My Portfolio",
    logo: "/self.jpeg",
    thumbnail: ["/thumbnail.png"],
    mobileThumbnail: "/background.jpeg",
    intro: "~ My portfolio site ~",
    description:
      "This site not only describes more details about me, but also as a landing page showing my specialized skills ...",
    time: "05.2024",
    technologies: [
      { name: "NextJS", icon: React.createElement(NextJSIcon) },
      {
        name: "TailwindCSS",
        icon: React.createElement(TailwindCSSIcon, { className: "h-full" }),
      },
    ],
    href: "/",
  },
  {
    name: "HDCapital phase 2",
    logo: "/hdcap-logo.png",
    mobileThumbnail: "/hdcap-basicknow.jpg",
    intro:
      "“Vietnam’s leading open fund investment platform, helping people invest and save more effectively”",
    description: ["Improve SEO for HDCapital website"],
    time: "12.23 - 02.24",
    technologies: [
      { name: "Java", icon: React.createElement(JavaFillIcon) },
      {
        name: "VanillaJS",
        icon: React.createElement(JSIcon, { className: "h-full fill-current" }),
      },
    ],
    href: "https://hdcap.vn/",
  },
  {
    name: "HDCapital",
    logo: "/hdcap-logo.png",
    thumbnail: [
      "/hdcap-thumbnail.png",
      "/hdcap-vision.png",
      "/hdcap-chart.png",
      "/hdcap-product.png",
    ],
    mobileThumbnail: "/hdcap-thumbnail.png",
    intro:
      "“Vietnam’s leading open fund investment platform, helping people invest and save more effectively”",
    description: [
      "Develop official website for HD Capital",
      "Design data structure and database for the website.",
    ],
    time: "02.22 - 10.22",
    technologies: [
      { name: "Java", icon: React.createElement(JavaFillIcon) },
      {
        name: "VanillaJS",
        icon: React.createElement(JSIcon, { className: "h-full fill-current" }),
      },
    ],
    href: "https://hdcap.vn/",
  },
];

export type ProjectProps = {
  name: string;
  logo: string;
  thumbnail?: string[];
  mobileThumbnail: string;
  intro: string;
  description: string | string[];
  technologies?: TechnologyProps[];
  time: string;
  href: string;
};

type TechnologyProps = {
  name: string;
  icon: JSX.Element | string;
};
