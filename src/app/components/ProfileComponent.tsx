import Image from "next/image";
import ContactMethodComponent from "./ContactMethodComponent";
import SkillsComponent from "./SkillComponent";
import { Divider } from "@nextui-org/react";

export default function ProfileComponent() {
  return (
    <div className="profile-card items-center px-5 py-8 gap-4">
      <Image
        src={"/logo2.jpg"}
        width={200}
        height={200}
        alt=""
        className="rounded-full"
      />

      <div className="flex flex-col items-center lg:gap-1 2xl:gap-2">
        <span className="text-3xl 2xl:text-5xl font-bold">Truong Thinh</span>
        <span className="text-lg 2xl:text-2xl font-light">
          Software Engineer
        </span>
        <ContactMethodComponent />
      </div>

      <Divider />

      <SkillsComponent />
    </div>
  );
}