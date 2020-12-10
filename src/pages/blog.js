import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import BlogHeader from '../components/BlogHeader';
import Contact from '../components/Contact';
import SEO from '../components/seo';

const BlogPreviewContainer = styled.article`
  position: relative;
  max-width: 920px;
  padding: 1rem;
  background: #d3d3de26;
  border-radius: 10px;
  display: grid;
  margin: 60px 20px;
  transition: background 100ms ease-in-out;

  header {
    h3 {
      margin: 0;
      font-family: 'Playfair Display';
      font-weight: bold;
      font-size: 3rem;
      letter-spacing: 0.05em;
      color: #3f3d56;
    }
    small {
      font-weight: normal;
      line-height: 3rem;
      font-size: 1rem;
      letter-spacing: 0.05em;
      color: #3f3d56;
    }
  }

  section {
    color: #3f3d56;
    p {
      margin: 0;
      font-size: 1.1rem;
      letter-spacing: 0.05em;
      color: #3f3d56;
    }
  }

  &:hover {
    background: #d3d3de6b;
  }
`;

const BlogsWrapper = styled.div`
  max-width: 1020px;
  margin: 0 auto;
`;

const PostImage = styled(Img)`
  grid-area: img;
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: 1.5rem;
  object-fit: cover;
  margin: 0;

  @media only screen and (min-width: 800px) {
    position: initial;
    padding-right: 2rem;
  }
`;

const Tags = styled.div`
  display: flex;
`;

const Tag = styled.div`
  padding: 0.1rem 0.5rem;
  background: ${({ type }) =>
    (type === 'coding' && '#ddddff') ||
    (type === 'productivity' && '#ffc4c4') ||
    (type === 'blockchain' && 'rgb(238 174 46)') ||
    (type === 'life' && 'rgb(170 255 209)')};
  border-radius: 5px;
  margin: 1rem 0.4rem 1rem 0;
  font-size: 0.9rem;
`;

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="BLOG" />
      <BlogHeader />
      <BlogsWrapper>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.frontmatter.slug;
          return (
            <Link
              style={{ boxShadow: `none` }}
              to={`/blog/${node.frontmatter.slug}`}
            >
              <BlogPreviewContainer key={node.frontmatter.slug}>
                <header>
                  <h3>{title}</h3>
                  <small>{node.frontmatter.date}</small>
                </header>

                <section
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                <Tags>
                  {node.frontmatter.tags.map(tag => (
                    <Tag type={tag.toLowerCase()}>{tag}</Tag>
                  ))}
                </Tags>
              </BlogPreviewContainer>
            </Link>
          );
        })}
      </BlogsWrapper>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { project: { eq: null } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
            tags
            description
            image {
              childImageSharp {
                fluid {
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
