import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// Someday this may work...
// import mediumLogo from "./medium-logo.svg";
const mediumLogo = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1770 1000" className="bi">
    <circle cx="500" cy="500" r="500"/>
    <ellipse ry="475" rx="250" cy="501" cx="1296"/>
    <ellipse cx="1682" cy="502" rx="88" ry="424"/>
  </svg>
);

const bottomLinksMargin = "mb-2";

interface HeaderProps {
  siteTitle: string;
  socialLinks: IconLinkProps[];
  headerLinks: LinkItemProps[];
}

interface BrandProps {
  siteName: string;
  url: string;
};

const brandClassName = `d-flex align-items-center col-md-3 ${bottomLinksMargin} mb-md-0 text-dark text-decoration-none`;
const Brand = ({ siteName, url }: BrandProps) => (
  <Link className={brandClassName} to={url}>{siteName}</Link>
)

interface LinkItemProps {
  text: string;
  url: string;
}

const linkItemClassName = "nav-link px-2 text-dark";
const LinkItem = ({ text, url }: LinkItemProps) => {
  return (<li><Link className={linkItemClassName} to={url}>{text}</Link></li>)
};

const links = [
  {text: "Published", url: "/published"},
  {text: "Projects", url: "/projects"},
  {text: "Presentations", url: "/presentations"},
];

interface LinksProps {
  links: LinkItemProps[];
};

const linksClassName = `nav col-12 col-md-auto ${bottomLinksMargin} justify-content-center mb-md-0`;
const Links = ({ links }: LinksProps) => (
  <ul className={linksClassName}>
    {links.map((props, key) => <LinkItem key={key} {...props}></LinkItem>)}
  </ul>
);

interface IconProps {
  icon: string;
};

const Icon = ({ icon }: IconProps) => {
  if (icon === "medium") {
    return <i className={`bi`}>
      <svg height="1em" width="1em">{mediumLogo}</svg>
    </i>
  }
  return <i className={`bi bi-${icon}`}></i>
};

interface IconLinkProps {
  icon: string;
  url: string;
};


interface SocialIconsProps {
  icons: IconLinkProps[];
};

const iconLinkClassName = "text-dark ms-2";

const socialIconsClassName = `col-md-3 text-end`
const SocialIcons = ({ icons }: SocialIconsProps) => (
  <div className={socialIconsClassName}>
    {icons.map(({ icon, url }, key) => 
      <a key={key} className={iconLinkClassName} href={url}>
        <Icon icon={icon} />
      </a>
    )}
  </div>
);


const headerClassName = `d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom`;
const Header = ({ siteTitle, socialLinks, headerLinks }: HeaderProps) => (
  <header className={headerClassName}>
    <Brand siteName={siteTitle} url="/" />
    <Links links={headerLinks} />
    <SocialIcons icons={socialLinks} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
