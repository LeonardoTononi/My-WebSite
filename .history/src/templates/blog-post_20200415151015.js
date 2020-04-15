import React from 'react';
import { Link, graphql } from 'gatsby';

import { BlogPostContainer, HeaderImg, SubscribeSection } from './blog-post.styles';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import BlogPostHeader from '../components/BlogPostHeader/BlogPostHeader';
import Contact from '../components/Contact/Contact';
import BlogSubscribeButton from '../components/BlogSubscribeButton/BlogSubscribeButton';

import PostImg from '../../content/assets/comingsoon.svg';

const BlogPostTemplate = ({ data, pageContext, location }) => {
	const post = data.markdownRemark;
	const siteTitle = data.site.siteMetadata.title;
	console.log(pageContext, 'PAGE CONTEXT');
	const { previous, next } = pageContext;

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
			<BlogPostHeader title={post.frontmatter.title} date={post.frontmatter.date} />
			<BlogPostContainer>
				<HeaderImg src={PostImg} alt='' />
				<section dangerouslySetInnerHTML={{ __html: post.html }} />
			</BlogPostContainer>
			<SubscribeSection>
				<h3>Don't forget...</h3>
				<h4>Subscribe to receive my new post directly in your inbox.</h4>
				<p>No spam guaranteed.</p>
				<BlogSubscribeButton />
			</SubscribeSection>

			<Contact id='contact' />
		</Layout>
	);
};

export default BlogPostTemplate;

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				description
			}
		}
	}
`;
