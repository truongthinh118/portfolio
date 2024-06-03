import JSIcon from "@/components/icon/JSIcon";
import JavaFillIcon from "@/components/icon/JavaFillIcon";
import JavaIcon from "@/components/icon/JavaIcon";
import { NextJSIcon } from "@/components/icon/NextJSIcon";
import { TailwindCSSIcon } from "@/components/icon/TailwindcssIcon";
import Image from "next/image";

export const projects: ProjectProps[] = [
  {
    name: "My Portfolio",
    logo: "",
    thumbnail: ["/thumbnail.png"],
    intro: "~ My portfolio site ~",
    description:
      "This site not only describes more details about me, but also as a landing page showing my specialized skills ...",
    time: "05.2024",
    technologies: [
      { name: "NextJS", icon: <NextJSIcon /> },
      { name: "TailwindCSS", icon: <TailwindCSSIcon className="h-full" /> },
    ],
    href: "/",
  },
  {
    name: "HDCapital",
    logo: "",
    thumbnail: [
      "/hdcap-thumbnail.png",
      "/hdcap-vision.png",
      "/hdcap-product.png",
    ],
    intro:
      "“Vietnam’s leading open fund investment platform, helping people invest and save more effectively”",
    description: [
      "Develop official website for HD Capital",
      "Design data structure and database for the website.",
    ],
    time: "12.23 - 03.24",
    technologies: [
      { name: "Java", icon: <JavaFillIcon className="" /> },
      { name: "Vanilla JS", icon: <JSIcon className="h-full fill-current" /> },
    ],
    href: "https://hdcap.vn/",
  },
];

type ProjectProps = {
  name: string;
  logo: string;
  thumbnail: string[];
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
