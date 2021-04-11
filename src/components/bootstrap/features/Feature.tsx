import React from "react";
import Icon from "../Icon";

import "./feature.css";

export interface FeatureProps {
  children: React.ReactNode;
  icon: string;
  iconColor?: string;
  title: string;
  callToAction?: React.ReactNode;
};

export const Feature = ({ children, icon, iconColor = "secondary", title, callToAction }: FeatureProps) => {
  return (
    <div className="feature col-xl-4">
      <h2>
        <div className={`feature-icon bg-${iconColor} bg-gradient me-3`}>
          <Icon icon={icon} />
        </div>
        {title}
      </h2>
      {children}
      {callToAction ? callToAction : ""}
    </div>
  );
};

export const FeaturesTitle = ({ title }: { title: string }) => (
  <h2 className="pb-2 border-bottom">{title}</h2>
);

export interface FeaturesProp {
  children: React.ReactNode;
  title: string;
}

export const Features = ({ children, title }: FeaturesProp) => {
  return (
    <>
      <FeaturesTitle title={title} />
      <div className="row g-5 py-5">
        {children}
      </div>
    </>
  );
};

export default Feature;