import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Header from '../components/Header';
import ProjectPreview from '../components/ProjectPreview';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="My Ptf" />
      <Header />
      <ProjectPreview
        projects={data.allMarkdownRemark.edges}
        order1="2"
        order2="1"
        alignEnd
        firstProject
        mobile
      />
      <Skills />
      <About />
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(filter: { frontmatter: { project: { eq: true } } }) {
      edges {
        node {
          fields {
            slug
          }
          html
          id
          rawMarkdownBody
          frontmatter {
            demo_url
            description
            github_url
            slug
            stack
            title
            date(locale: "")
            project
            imagePreview {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
