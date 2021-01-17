import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../../components/Layout';
import BlogHeader from '../../components/BlogHeader';
import SEO from '../../components/seo';

import {
  BlogPreviewContainer,
  BlogsWrapper,
  Tags,
  Tag,
  Pagination,
  PageBtn,
} from './style.js';

const Projects = ({ pageContext, data, location }) => {
  const siteTitle = data?.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  const {
    pageNumber,
    numberOfPages,
    nextPagePath,
    previousPagePath,
  } = pageContext;

  // TODO: create header component and add it also to blog page
  // TODO: create a two col component for image and / title / text / link / stack
  // TODO: fill page with projects coming from a projects folder inside the content folders
  // TODO: create image mockup for every other project

  const RenderPageBtn = () => {
    let items = [];
    for (let i = 1; i <= numberOfPages; i++) {
      items.push(
        <PageBtn
          to={(i === 1 && `/blog`) || `/blog/${i}`}
          className={pageNumber + 1 === i && 'active'}
        >
          {i}
        </PageBtn>
      );
    }
    return items.map(item => item);
  };

  const RenderPrevBtn = pageNumber > 0 && (
    <PageBtn to={previousPagePath}>&#60;</PageBtn>
  );

  const RenderNextBtn = numberOfPages !== 1 &&
    pageNumber !== numberOfPages - 2 && (
      <PageBtn to={nextPagePath}>&#62;</PageBtn>
    );

  return (
    <Layout title={siteTitle}>
      <SEO title="A list of my projects" location={location} />
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
      <Pagination>
        {RenderPrevBtn}
        {RenderPageBtn()}
        {RenderNextBtn}
      </Pagination>
    </Layout>
  );
};

export default Projects;

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
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
          }
        }
      }
    }
  }
`;
