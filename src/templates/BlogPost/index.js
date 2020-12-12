import React from 'react';
import Layout from '../../components/Layout';

import {
  BlogPostContainer,
  HeaderImg,
  SubscribeSection,
  FollowMe,
} from './style';
import { ProjectContainer } from '../Project/style';
import SEO from '../../components/seo';
import BlogPostHeader from '../../components/BlogPostHeader';
import { SiTwitter } from 'react-icons/si';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BlogPostHeader
        title={post.frontmatter.title}
        date={post.frontmatter.date}
      />
      <ProjectContainer>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </ProjectContainer>
      <SubscribeSection>
        <h3>Don't forget...</h3>
        <h4>
          You can follow me on <span>Twitter</span>, sometimes I write something
          meaningful.
        </h4>
        <p>Thanks for reading.</p>
        <FollowMe>
          <SiTwitter />
          Follow Me
        </FollowMe>
      </SubscribeSection>
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
      frontmatter {
        title
        description
        tags
      }
    }
  }
`;
