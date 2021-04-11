import { useStaticQuery, graphql } from "gatsby"

import React, { Fragment, ReactNode as Node } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { withClass } from "../components/bootstrap/tools";
import { Icon, IconBackground } from "../components/bootstrap/Icon";
import { Row, Col, ColumnOffsetSizeClasses } from "../components/bootstrap/Rows";
import { Badges } from "../components/bootstrap/Badge";

import "../components/bootstrap/features/feature.css";


interface Tool {
  name: string;
  icon: string;
  years: number;
  proficiency: number;
  versions: string[];
  related: string[];
  description: string;
}

interface Position {
  title: string;
  yearStart: number;
  yearEnd?: number;
  description?: string;
}

interface Part {
  organization: string;
  icon: string;
  positions: Position[];
}


interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {};

const Heading = ({ children, ...props }: HeadingProps) => (
  <h2 {...withClass(props, "border-bottom", "mb-5")}>{children}</h2>
);

interface ColumnHeaderProps {
  title: string;
};

const ColumnHeader = ({ title }: ColumnHeaderProps) => (
    <div className="border-bottom pt-2">
      <h4>{title}</h4>
    </div>
);


interface FloatingIconProps extends React.HTMLProps<HTMLDivElement> {
  icon: Node;
};

const FloatingIcon = ({ children, icon, ...props}: FloatingIconProps) => (
  <div {...withClass(props, "mb-5", "d-flex", "align-items-start")}>
    <div className="flex-shrink-0">
      {icon}
    </div>
    <div>
      {children}
    </div>
  </div>
);

const columns: ColumnOffsetSizeClasses = {"": 12, "md": 6, "xl": 4};
const AboutPage = () => {
  const { allWorkhistoryYaml, allTechYaml } = useStaticQuery(graphql`
    query WorkHistory {
      allTechYaml {
        nodes {
          icon
          description
          name
          proficiency
          related
          versions
          years
        }
      }
      allWorkhistoryYaml {
        edges {
          node {
            id
            icon
            organization
            positions {
              title
              yearEnd
              yearStart
              description
            }
          }
        }
      }
    }
  `)

  const workHistory = allWorkhistoryYaml.edges.map(({ node }: any) => (node))
  const techHistory = allTechYaml.nodes;

  return (
    <Layout>
      <SEO title="About Me" />
      <div className="text-center mb-5">
        <h1>About Me</h1>
        <p className="lead">I've worked places. I've done things.</p>
      </div>

      <Row>
        <Col className="text-center" columnSizes={12}>
          <Heading>Tools I've Used</Heading>
        </Col>

        {techHistory.map((tool: Tool, key: any) => (
          <Col key={key} columnSizes={columns} className="pe-md-5">
            <FloatingIcon icon={(
              <IconBackground className="me-3 mb-0" bgColor={"primary"}>
                <Icon icon={tool.icon} />
              </IconBackground>
            )}>
              <ColumnHeader title={tool.name} />
              <p>{tool.description}</p>
              {tool?.versions && (
                  <p style={{fontSize: "0.75rem"}}><strong>Versions:</strong> <Badges badges={tool.versions} className="mb-1" /></p>
              )}
              {tool?.related && (
                  <p style={{fontSize: "0.75rem"}}><strong>Related:</strong> <Badges badges={tool.related} className="mb-1" /></p>
              )}
            </FloatingIcon>
          </Col>
        ))}


        <Col className="text-center" columnSizes={12}>
          <Heading>Jobs I've Had</Heading>
        </Col>

        {workHistory.map((part: Part, key: number) => (
          <Col columnSizes={columns} className="ps-md-5">
            <div key={key} className="mb-5 d-flex align-items-start">
              <div className="flex-shrink-0">
                <IconBackground className="me-3 mb-0" bgColor={"primary"}>
                  <Icon icon={part.icon} />
                </IconBackground>
              </div>

              <div>
                <ColumnHeader title={part.organization} />

                {part.positions.map((position: Position, key: number) => (
                  <Fragment key={key}>
                    <p>
                      {position?.description}
                    </p>
                    <p>
                      <strong>
                        From {position.yearStart}
                        {position.yearEnd && ` until ${position.yearEnd}`}
                      </strong>
                    </p>
                  </Fragment>
                ))}
              </div>
            </div>
          </Col>
        ))}

      </Row>
    </Layout>
  );
};

export default AboutPage
