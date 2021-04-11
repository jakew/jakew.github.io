/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Container from "react-bootstrap/Container";

import Header from "./header"

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          socialLinks {
            icon
            url
          }
          headerLinks {
            text
            url
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Header 
        siteTitle={data.site.siteMetadata?.title || `Title`} 
        socialLinks={data.site.siteMetadata.socialLinks}
        headerLinks={data.site.siteMetadata.headerLinks}
      />
      <div>
        <main>{children}</main>
        <footer className="text-center mt-2">
          © {new Date().getFullYear()}, Built with ❤️ and
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
