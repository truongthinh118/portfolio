import Image from "next/image";
import ContactMethodComponent from "./ContactMethodComponent";
import SkillsComponent from "./SkillComponent";
import { Divider } from "@nextui-org/react";

export default function ProfileComponent() {
  return (
    <div className="profile-card items-center gap-4 bg-background px-5 py-8 text-foreground">
      <Image
        src={"/self.jpeg"}
        alt=""
        width={200}
        height={200}
        style={{ width: "200px", height: "200px" }}
        className="rounded-full object-none"
      />

      <div className="flex flex-col items-center lg:gap-1 2xl:gap-2">
        <span className="text-3xl font-bold 2xl:text-5xl">Truong Thinh</span>
        <span className="text-lg font-light 2xl:text-2xl">
          Software Engineer
        </span>
        <ContactMethodComponent />
      </div>

      <Divider />

      <SkillsComponent />
    </div>
  );
}
