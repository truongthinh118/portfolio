import { Button } from "@nextui-org/react";
import AppStoreIcon from "./icon/AppStoreIcon";
import GooglePlayIcon from "./icon/GooglePlayIcon";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface DownloadAppComponentProps extends React.ComponentPropsWithRef<"div"> {
  googleLink: string;
  appleLink: string;
}

export default function DownloadAppComponent({
  googleLink,
  appleLink,
  className,
  children,
}: DownloadAppComponentProps) {
  return (
    <>
      <div className={twMerge("flex flex-row gap-3", className)}>
        {children}
        {googleLink && (
          <Button
            as={Link}
            href={googleLink}
            target="_blank"
            className="flex h-12 w-full min-w-fit max-w-48 items-center justify-center gap-2 rounded-xl bg-foreground px-3 text-default dark:border dark:border-black sm:h-14"
          >
            <GooglePlayIcon className="w-5 sm:w-7" />
            <div>
              <div className="text-center text-[.5rem] max-sm:leading-normal sm:text-xs">
                GET IT ON
              </div>
              <div className="-mt-1 font-sans text-sm font-semibold sm:text-xl">
                Google Play
              </div>
            </div>
          </Button>
        )}

        {appleLink && (
          <Button
            as={Link}
            href={appleLink}
            target="_blank"
            className="flex h-12 w-full min-w-fit max-w-48 items-center justify-center gap-2 rounded-xl bg-foreground px-3 text-default dark:border dark:border-black sm:h-14 sm:gap-3"
          >
            <AppStoreIcon className="w-5 sm:w-7" />
            <div>
              <div className="text-center text-[.5rem] max-sm:leading-normal sm:text-xs">
                Download on the
              </div>
              <div className="-mt-1 font-sans text-lg font-semibold sm:text-2xl">
                App Store
              </div>
            </div>
          </Button>
        )}
      </div>
    </>
  );
}
