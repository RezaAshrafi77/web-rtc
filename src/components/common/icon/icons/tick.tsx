import React from "react";
import { IconType } from "./type";

export default function Tick(props: IconType) {
  const { size, color } = props;
  return (
    <svg
      width={size || "30" + "px"}
      height={size || "30" + "px"}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 2.5C8.125 2.5 2.5 8.125 2.5 15C2.5 21.875 8.125 27.5 15 27.5C21.875 27.5 27.5 21.875 27.5 15C27.5 8.125 21.875 2.5 15 2.5ZM12.5 21.25L6.25 15L8.0125 13.2375L12.5 17.7125L21.9875 8.225L23.75 10L12.5 21.25Z"
        fill={color || "#61BFB4"}
      />
    </svg>
  );
}
