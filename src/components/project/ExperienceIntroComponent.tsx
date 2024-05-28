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
    className: "h-full w-auto p-2",
  });

  const sideLogo = React.cloneElement(data.logo, {
    className: "h-full",
  });
  return (
    <>
      <div className="flex flex-row-reverse items-center justify-between gap-1 pb-4 md:flex-col">
        <div className="flex h-full flex-col justify-evenly">
          <div className="flex flex-row items-center gap-2 lg:gap-4">
            <UserIcon className="h-3 fill-current text-current sm:h-10 sm:p-2" />
            <span className="text-sm font-light xs:text-lg 2xl:text-2xl ">
              Role: {data.role}
            </span>
          </div>

          <div className="flex flex-row items-center gap-2 lg:gap-4">
            <CalendarIcon className="h-3 fill-current text-current sm:h-10 sm:p-2" />
            <span className="text-sm font-light xs:text-lg  2xl:text-2xl">
              Duration: {data.duration}
            </span>
          </div>
        </div>

        <Button
          className="h-16 min-h-16 min-w-max max-w-max bg-neutral-100 sm:h-24 sm:min-h-24 md:h-48 md:min-h-48 md:min-w-full"
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
          className="h-12 w-full bg-default-foreground sm:h-14"
        >
          {sideLogo}
        </Button>
      </DownloadAppComponent>
    </>
  );
}
