import React from "react";
import type { SVGProps } from "react";

export function CNLangIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={4}
      >
        <rect
          width={36}
          height={36}
          x={6}
          y={6}
          strokeLinejoin="round"
          rx={3}
        ></rect>
        <path strokeLinejoin="round" d="M14 18h20v10H14z"></path>
        <path d="M24 14v21"></path>
      </g>
    </svg>
  );
}
