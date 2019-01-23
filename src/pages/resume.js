import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ResumePage = ({ data }) => (
  <Layout>
    <SEO
      title="Resume"
      keywords={[
        `Sean O'Hara`,
        `resume`,
        `c.v.`,
        `ember.js`,
        `software engineer`,
        `software developer`
      ]}
    />

    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div
        className="resume max-w-md mx-auto"
        key={node.id}
        dangerouslySetInnerHTML={{ __html: node.html }}
      />
    ))}
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "Resume" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          html
        }
      }
    }
  }
`;

export default ResumePage;
