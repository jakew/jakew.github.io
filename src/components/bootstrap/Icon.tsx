import React from "react";

import { withClass } from "./tools";

export interface IconProps extends React.HTMLProps<HTMLElement> {
  icon: string;
}

export const Icon = ({children, icon, ...props}: IconProps) => (
  <i {...withClass(props, "bi", `bi-${icon}`)}>{children}</i>
);


export interface IconBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  bgColor?: string;
};

export const IconBackground = ({ children, bgColor = "secondary", ...props }: IconBackgroundProps) => (
  <div {...withClass(props, "feature-icon", `bg-${bgColor}`, "bg-gradient")}>{children}</div>
);

export default Icon;