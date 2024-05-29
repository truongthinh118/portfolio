import { experienceDataProps } from "@/assets/experience-data";
import { UserIcon } from "../icon/UserIcon";
import { CalendarIcon } from "../icon/CalendarIcon";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import DownloadAppComponent from "../DownloadAppComponent";
import React from "react";

export default function ExperienceIntoduction({
  data,
}: {
  data: experienceDataProps;
}) {
  const mainLogo = React.cloneElement(data.logo, {
    className: "h-auto w-[25vw] p-2",
  });

  const sideLogo = React.cloneElement(data.logo, {
    className: "h-full",
  });
  return (
    <>
      <div className="flex flex-row-reverse items-center justify-between gap-2 pb-4 md:flex-col md:gap-1">
        <table className="w-full table-auto">
          <tbody className="text-sm font-light xs:text-lg  2xl:text-2xl">
            <tr>
              <td className="flex items-center gap-2">
                <UserIcon className="h-5 fill-current text-current sm:h-10 sm:p-2" />
                <span className="">Role: </span>
              </td>
              <td className="w-max text-left">{data.role}</td>
            </tr>
            <tr>
              <td className="flex items-center gap-2">
                <CalendarIcon className="h-5 fill-current text-current sm:h-10 sm:p-2" />
                <span className="">Duration: </span>
              </td>
              <td className="text-left">{data.duration}</td>
            </tr>
          </tbody>
        </table>

        <Button
          className="h-16 min-h-16 bg-neutral-100 max-md:min-w-[25%] sm:h-24 sm:min-h-24 md:h-48 md:min-h-48 md:min-w-full"
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
          className="mt-2 w-full justify-evenly max-md:hidden"
        />
      </div>
      <DownloadAppComponent
        googleLink="https://play.google.com/store/apps/details?id=com.aladinmobile.aladin"
        appleLink="https://apps.apple.com/us/app/aladin-finance/id1474783146"
        className="md:hidden"
      >
        <Button
          as={Link}
          href={"https://aladin.finance/"}
          className="h-12 w-max bg-default-foreground max-sm:hidden sm:h-14"
        >
          {sideLogo}
        </Button>
      </DownloadAppComponent>
    </>
  );
}
