import ContactMethodComponent from "../contact/ContactMethodComponent";
import { Divider } from "@nextui-org/react";
import AvatarComponent from "./AvatarComponent";
import SkillsComponent from "./SkillComponent";

export default function ProfileComponent() {
  return (
    <div className="profile-card items-center gap-4 bg-background px-5 py-8 text-foreground">
      <AvatarComponent />

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
