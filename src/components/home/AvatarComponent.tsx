import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function AvatarComponent({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        "relative size-[12.5rem] overflow-hidden rounded-full",
        className,
      )}
    >
      <Image
        src={"/self.jpeg"}
        alt=""
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover dark:hidden"
      />
      <Image
        src={"/self-dark.jpeg"}
        alt=""
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="hidden object-cover object-bottom dark:block"
      />
    </div>
  );
}
