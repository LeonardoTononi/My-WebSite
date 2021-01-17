import React from 'react';
import Layout from '../../components/Layout';

import { BlogPostContainer, HeaderImg } from './style';
import { CallToAction } from '../../components/CallToAction';
import { ProjectContainer } from '../Project/style';
import SEO from '../../components/seo';
import BlogPostHeader from '../../components/BlogPostHeader';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BlogPostHeader
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        tags={post.frontmatter.tags}
        time={post.timeToRead}
      />
      <ProjectContainer>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </ProjectContainer>
      <CallToAction />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt
      html
      timeToRead
      frontmatter {
        title
        description
        tags
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
