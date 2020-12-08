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
      <ProjectPreview order1="2" order2="1" alignEnd firstProject mobile />
      <About />
      <Skills />
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
    bestfiveImage: file(relativePath: { eq: "projects/bestfive.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hotelvittoriaImage: file(
      relativePath: { eq: "projects/hotel-vittoria.png" }
    ) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    toureoadminImage: file(relativePath: { eq: "projects/toureo-admin.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    toureoprotoImage: file(relativePath: { eq: "projects/toureo-proto.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
