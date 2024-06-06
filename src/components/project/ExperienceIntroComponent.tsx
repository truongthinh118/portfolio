import { experienceDataProps } from "@/data/experience-data";
import { UserIcon } from "../icon/UserIcon";
import { CalendarIcon } from "../icon/CalendarIcon";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import DownloadAppComponent from "../DownloadAppComponent";
import React from "react";
import Reveal from "../motion/RevealComponent";

export default function ExperienceIntoduction({
  data,
}: {
  data: experienceDataProps;
}) {
  const mainLogo = React.cloneElement(data.logo, {
    className: "size-full p-2",
  });

  const sideLogo = React.cloneElement(data.logo, {
    className: "h-full",
  });
  return (
    <Reveal width="100%">
      <div className="flex flex-row-reverse items-center justify-between gap-2 pb-4 lg:flex-col lg:gap-1">
        <div className="flex w-full max-lg:justify-center">
          <table className="table-auto">
            <tbody className="text-sm font-light xs:text-lg  2xl:text-2xl">
              <tr>
                <td className="flex items-center justify-start gap-2">
                  <UserIcon className="aspect-square h-5 fill-current text-current sm:h-10 sm:p-2" />
                  <span className="">Role: </span>
                </td>
                <td className="w-max text-left">{data.role}</td>
              </tr>
              <tr>
                <td className="flex items-center justify-start gap-2">
                  <CalendarIcon className="aspect-square h-5 fill-current text-current sm:h-10 sm:p-2" />
                  <span className="">Duration: </span>
                </td>
                <td className="text-left">{data.duration}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Button
          className="h-16 min-h-16 bg-neutral-100 max-lg:min-w-[25%] sm:h-24 sm:min-h-24 lg:h-48 lg:min-h-48 lg:min-w-full"
          isIconOnly
          href={data.web}
          as={Link}
          target="_blank"
        >
          {mainLogo}
        </Button>
        <DownloadAppComponent
          googleLink={data.googlePlay}
          appleLink={data.appStore}
          className="mt-2 w-full justify-evenly max-lg:hidden"
        />
      </div>
      <DownloadAppComponent
        googleLink="https://play.google.com/store/apps/details?id=com.aladinmobile.aladin"
        appleLink="https://apps.apple.com/us/app/aladin-finance/id1474783146"
        className="lg:hidden"
      >
        <Button
          as={Link}
          href={"https://aladin.finance/"}
          className="h-12 w-max bg-default-foreground max-sm:hidden sm:h-14"
        >
          {sideLogo}
        </Button>
      </DownloadAppComponent>
    </Reveal>
  );
}
