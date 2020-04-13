import React from 'react';
import { Link, graphql } from 'gatsby';

import { BlogPostContainer, End, SubscribeSection } from './blog-post.styles';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import BlogPostHeader from '../components/BlogPostHeader/BlogPostHeader';
import Contact from '../components/Contact/Contact';

import PostImg from '../../content/assets/gameboy.svg';
import BlogSubscribeButton from '../components/BlogSubscribeButton/BlogSubscribeButton';

const BlogPostTemplate = ({ data, pageContext, location }) => {
	const post = data.markdownRemark;
	const siteTitle = data.site.siteMetadata.title;
	const { previous, next } = pageContext;

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
			<BlogPostHeader title={post.frontmatter.title} date={post.frontmatter.date} />
			<BlogPostContainer>
				<img src={PostImg} alt='' />
				<section dangerouslySetInnerHTML={{ __html: post.html }} />
			</BlogPostContainer>
			<SubscribeSection>
				<BlogSubscribeButton />
			</SubscribeSection>
			<End>
				<p>
					Thanks to arrive till the end, I wish you a great day,<br /> Leonardo Tononi.
				</p>
			</End>
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
