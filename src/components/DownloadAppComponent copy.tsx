import { Button, Link } from "@nextui-org/react";
import AppStoreIcon from "./icon/AppStoreIcon";
import GooglePlayIcon from "./icon/GooglePlayIcon";

export default function DownloadAppComponent() {
  return (
    <>
      <div className="mt-2 flex flex-row gap-3">
        <Button
          as={Link}
          isExternal
          className="flex h-12 max-w-48 items-center justify-center gap-2 rounded-xl bg-foreground px-3 leading-none text-default dark:border dark:border-black sm:h-14 sm:gap-3"
          startContent={<GooglePlayIcon className="w-5 sm:w-7" />}
        >
          <div className="flex size-full flex-col items-center justify-center">
            <div className="text-[.5rem] sm:text-xs">GET IT ON</div>
            <div className="font-sans text-sm font-semibold sm:-mt-1 sm:text-xl">
              Google Play
            </div>
          </div>
        </Button>

        <Button
          as={Link}
          isExternal
          className="flex h-12 max-w-48 items-center justify-center gap-2 rounded-xl bg-foreground px-3 leading-none text-default dark:border dark:border-black sm:h-14 sm:gap-3"
          startContent={
            <AppStoreIcon className="w-5 min-w-5 sm:w-7 sm:min-w-7" />
          }
        >
          <div className="flex size-full flex-col items-center justify-center">
            <div className="text-[.5rem] sm:text-xs">Download on the</div>
            <div className="-mt-1 font-sans text-lg font-semibold sm:text-2xl">
              App Store
            </div>
          </div>
        </Button>
      </div>
    </>
  );
}
