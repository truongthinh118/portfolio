import { AladinIcon, ViCKIcon } from "@/components/icon/LogoIcon";
import React from "react";

export const experienceData: { [key: string]: experienceDataProps } = {
  aladin: {
    fullname: "Aladin Finance",
    description:
      "A platform connecting the community of professional consultants.",
    web: "https://aladin.finance/",
    role: "Backend Developer",
    duration: "Nov 2021 - Oct 2022",
    logo: React.createElement(AladinIcon),
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.aladinmobile.aladin",
    appStore: "https://apps.apple.com/us/app/aladin-finance/id1474783146",
    project: [
      {
        name: "Automated news aggregation system",
        responsibility: [
          "Build an automated news aggregation system from multiple sources for efficiently processing and storing data to save time and effort.",
        ],
        teamsize: "2",
        imageGallery: ["/aladin.png"],
      },
      {
        name: "Automatically synchronize data",
        responsibility: [
          "Develop an application to automatically synchronize data from CRM applications to improve customer satisfaction.",
        ],
        teamsize: "2",
      },
      {
        name: "Trading System Platform",
        responsibility: [
          "Provide to professional investors a platform for managing the securities account portfolios entrusted by clients.",
          "Create great experience to customer by simultaneously making orders on several securities accounts entrusted by clients from numerous securities companies.",
          "Calculate customer profit and loss, commissions and trading fee for investors.",
        ],
        teamsize: "2",
      },
      {
        name: "Trading BOT",
        responsibility: [
          "Using historical data to back-test trading theories.",
          "Analyzing back-testing result and apply the most suitable theories in reality.",
          "Providing the trading strategies and trading signals for company and customers",
        ],
        teamsize: "2",
      },
    ],
  },
  vick: {
    fullname: "ViCK",
    description:
      "VICK stands as a pioneer among Vietnam’s stock market enterprises, offering exclusive Expert Consulting/Investment Advisory services tailored for individual investors.",
    web: "https://vick.vn/",
    role: "Software Engineer",
    duration: "Oct 2022 - Present",
    logo: React.createElement(ViCKIcon),
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.stalk.stalkmobile&hl=en_US",
    appStore: "https://apps.apple.com/vn/app/vick/id6443514902?l=vi",
    project: [
      {
        name: "Bespoke CMS and Framework",
        responsibility: [
          "Develop and enhance bespoke Content Management System (CMS) with features for posting, ordering management and SEO",
        ],
        teamsize: "3",
      },
      {
        name: "Payment System",
        responsibility: [
          "Develop a payment gateway and auto audit at end of day.",
          "Architect and implement a multi-platform payment system.",
          "Integrate popular gateways like MOMO and VNPAY, which leverages Kafka and Apache Ignite for high responsiveness and accuracy",
        ],
        teamsize: "1",
      },
      {
        name: "S-Wallet - a exclusive E-wallet",
        responsibility: [
          "Developed a companion e-wallet for convenient fund management and seamless transactions within the platform.",
        ],
        teamsize: "3",
        imageGallery: ["/s-wallet.png"],
      },
      {
        name: "Chatify - a real-time chat application",
        responsibility: [
          "Built a real-time chat application enabling user interaction with WebSocket technology.",
        ],
        teamsize: "3",
        imageGallery: ["/chatify-app.png"],
      },
      {
        name: "Trading Core",
        responsibility: [
          "Designed and developed a stock trading system, allowing users to place orders on the company's system with real-time data from the Vietnamese stock market.",
        ],
        teamsize: "2",
        imageGallery: ["/trading.png"],
      },
    ],
    otherRoles: [
      {
        title: "Intergrate CI/CD",
        role: "DevOps",
        description: [
          "Streamlined product delivery by implementing a CI/CD pipeline using Maven, GitLab, Jenkins, and Sonarqube, optimizing DevOps workflow and reducing time to market.",
        ],
      },
    ],
  },
};

export type experienceDataProps = {
  fullname: string;
  description: string;
  web: string;
  role: string;
  logo: JSX.Element;
  duration: string;
  googlePlay: string;
  appStore: string;
  project: experienceProjectProps[];
  otherRoles?: otherRolesProps[];
};

export type experienceProjectProps = {
  name: string;
  responsibility: string[];
  teamsize: string | number;
  imageGallery?: string[];
};

export type otherRolesProps = {
  title: string;
  role: string;
  description: string[];
};
