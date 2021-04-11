import React, { ReactNode as Node } from "react";
import { join, withClass } from "./tools";

export interface BadgeProps extends React.HTMLProps<HTMLSpanElement> {
  bgColor?: string;
}

export const Badge = ({ children, bgColor = "secondary", ...props }: BadgeProps) => {
  var textColor = "";
  if (bgColor === "warning" || bgColor === "info" || bgColor === "light") {
    textColor = "text-dark";
  }
  return (
    <span {...withClass(props, "badge", `bg-${bgColor}`, textColor)}>{children}</span>
  )
};


export interface BadgesProps extends React.HTMLProps<HTMLSpanElement> {
  badges: Node[];
}

export const Badges = ({ badges, ...props}: BadgesProps) => join(
  badges.map((badge, key) => <Badge key={key} {...props}>{badge}</Badge>)
);

export default Badge;