import React from "react";
import { withClass } from "./tools";

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  header?: React.ReactNode;
}

export const Card = ({children, header, ...props}: CardProps) => (
  <div {...withClass(props, "card")}>
    <div className="card-body">
      {header && <CardTitle>{header}</CardTitle>}
      {children}
    </div>
  </div>
);

export const CardTitle = ({children, ...props}: React.HTMLProps<HTMLHeadingElement>) => (
  <h5 { ...withClass(props, "card-title")}>{children}</h5>
);
  
export const CardText = ({children, ...props}: React.HTMLProps<HTMLParagraphElement>) => (
  <p { ...withClass(props, "card-text")}>{children}</p>
);