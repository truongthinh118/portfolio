import { otherRolesProps } from "@/assets/experience-data";
import React from "react";
import BounceUp from "../motion/BounceUpComponent";

export default function ExperienceSideRole({
  item,
}: {
  item: otherRolesProps;
}) {
  return (
    <BounceUp
      classNames={{ wrapper: "project flex w-full flex-col", base: "" }}
    >
      <h2 className="text-content1-foreground">{item.title}</h2>
      <span className="">
        Role: {item.role}
        <p>
          {item.description.map((des) => (
            <React.Fragment key={des}>
              {des}
              <br />
            </React.Fragment>
          ))}
        </p>
      </span>
    </BounceUp>
  );
}
