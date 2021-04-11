import * as React from "react";

import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Hero from "../components/hero/hero";

const ProfileImage = () => (
  <StaticImage
    src="../images/londoneye.jpeg"
    alt="A bearded and spectacled nerd."
    imgClassName="img-fluid rounded-3"
    className="d-block mx-lg-auto"
    width={700}
    height={500}
    loading="lazy"
  />
);

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HeroButtons {
      site {
        siteMetadata {
          heroButtons {
            content
            to
          }
        }
      }
    }  
  `)


  return (
    <Layout>
      <SEO title="Home" />
      <Hero heading="Hey, I'm Jake" image={<ProfileImage />} buttons={data.site.siteMetadata.heroButtons}>
        <p className="lead">
          I create things using words and code.
        </p>
      </Hero>
    </Layout>
  );
};
export default IndexPage
