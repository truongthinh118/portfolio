import { ProjectProps } from "@/lib/personal-project-data";
import Image from "next/image";

export default function MobilePersonalProject({
  item,
  index,
}: {
  item: ProjectProps;
  index: number;
}) {
  return (
    <>
      <div className=" flex h-96 w-[90%]">
        <span className="relative h-2/5 w-full">
          <Image
            src={item.thumbnail ? item.thumbnail[0] : item.logo}
            alt=""
            fill
            className="object-contain"
          />
        </span>
      </div>
    </>
  );
}
