import { Card } from "@nextui-org/react";
import Image from "next/image";
import { BullEyesIcon } from "../icon/Icon";

export default function IntroductionComponent() {
  return (
    <>
      <Card className="overflow-visible rounded-md border border-[#7A7673] shadow-md dark:bg-transparent">
        <span className="absolute translate-y-1/2 rounded-full bg-gradient-to-t from-default from-50% via-transparent via-50% p-1 max-lg:bottom-0 max-lg:right-8 lg:top-[50%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:bg-gradient-to-r">
          <BullEyesIcon className="h-7 lg:h-20" />
        </span>

        <span className="absolute left-[50%] -translate-y-1/2 bg-gradient-to-b from-default from-50% via-transparent via-50% px-1 font-bold max-lg:-translate-x-1/2 lg:left-12 lg:text-3xl">
          Objectives
        </span>

        <div className="objectives px-2 pb-6 pt-3 text-content1-foreground max-lg:text-sm lg:py-8 lg:pl-20 lg:pr-16">
          <span>
            Short term:
            <p>
              Aspire to work as a Software Developer in a prestigious company,
              be always proactive to gain specialized knowledge for making a
              contribution to the company development.
            </p>
          </span>
          <span>
            Long-term:
            <p>
              Evolve into a seasoned professional engineer who makes a lasting
              impact.
            </p>
          </span>
        </div>
      </Card>

      <Card className="overflow-visible rounded-md border border-[#7A7673] shadow-md dark:bg-transparent">
        <span className="absolute translate-y-1/2 rounded-full bg-gradient-to-t from-default from-50% via-transparent via-50% p-1 max-lg:bottom-0 max-lg:right-8 lg:top-[50%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:bg-gradient-to-r">
          <div className="relative size-7 lg:size-20">
            <Image
              src={"/logo-uel.png"}
              className="rounded-full"
              alt="University Logo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </span>

        <span className="absolute left-[50%] -translate-y-1/2 bg-gradient-to-b from-default from-50% via-transparent via-50% px-1 font-bold max-lg:-translate-x-1/2 lg:left-12 lg:text-3xl">
          Education
        </span>

        <div className="objectives px-2 pb-6 pt-3 text-content1-foreground max-lg:text-sm lg:py-8 lg:pl-20 lg:pr-16">
          <span>
            University of Economics and Law - Vietnam National University HCMC
            <p>
              Bachelor - Applied Mathematics in Economics, Management and
              Finance
            </p>
          </span>
        </div>
      </Card>
    </>
  );
}
