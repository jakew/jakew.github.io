import React from "react";

import { Link, GatsbyLinkProps } from "gatsby"
import { withClass } from "../bootstrap/tools";

const HeroImage = ({ image }: { image: React.ReactNode }) => (
  <div className="offset-1 col-10 offset-sm-2 col-sm-8 offset-lg-0 col-lg-6">
    {image}
  </div>
);

interface ButtonProps extends Omit<GatsbyLinkProps<{}>, 'ref'> {};
interface ButtonsProps extends React.HTMLProps<HTMLDivElement> {
  buttons: ButtonProps[];
}

const heroButtonsClassName = `d-grid gap-2 d-md-flex justify-content-evenly`;
const heroButtonClassName= `btn-lg px-4`;
const HeroButtons = ({ buttons, ...props }: ButtonsProps) => (
  <div {...withClass(props, heroButtonsClassName)}>
    {buttons.map(({children, ...props}: ButtonProps, key) => <Link key={key} {...withClass(props)}>{children}</Link>)}
  </div>
);

interface HeroProps extends React.HTMLProps<HTMLDivElement> {
  heading: React.ReactNode;
  image: React.ReactNode;
  buttons: ButtonProps[];
}

const heroClassName = `row text-center flex-lg-row-reverse align-items-center g-5 py-5`;
const Hero = ({ children, heading, image, buttons, ...props }: HeroProps) => (
  <div {...withClass(props, heroClassName)}>
    <HeroImage image={image} />
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold lh-1 mb-3">{heading}</h1>
      {children}
      <HeroButtons buttons={buttons} />
    </div>
  </div>
);

export default Hero;