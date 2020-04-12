import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import BlogPostHeader from '../components/BlogPostHeader/BlogPostHeader';
import Contact from '../components/Contact/Contact';

import PostImg from '../../content/assets/gameboy.svg';

const ArticleContainer = styled.article`
	position: relative;
	max-width: 1000px;
	padding: 6rem 2rem;
	border-radius: 20px;
	display: grid;
	grid-gap: 1rem;
	justify-content: start;
	align-content: center;
	align-items: center;
	grid-template-areas: "img" "header" "sub";

	@media only screen and (min-width: 800px) {
		grid-template-areas: "img header header" "img sub sub";
		height: 40vh;
	}

	img {
		grid-area: img;
		width: 200px;
		height: 200px;
		position: absolute;
		bottom: 1.5rem;

		@media only screen and (min-width: 800px) {
			position: initial;
		}
	}

	header {
		grid-area: header;

		@media only screen and (min-width: 800px) {
			padding-left: 2rem;
		}

		h3 {
			font-family: "Playfair Display";
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
			color: rgba(63, 61, 86, 0.6);
		}
	}

	section {
		grid-area: sub;

		@media only screen and (min-width: 800px) {
			padding-left: 2rem;
		}

		p {
			font-size: 1.1rem;
			letter-spacing: 0.05em;
			color: rgba(63, 61, 86, 0.6);
		}
	}
`;

const BlogPostTemplate = ({ data, pageContext, location }) => {
	const post = data.markdownRemark;
	const siteTitle = data.site.siteMetadata.title;
	const { previous, next } = pageContext;

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />

			<BlogPostHeader title={post.frontmatter.title} date={post.frontmatter.date} />
      <ArticleContainer>
        <img src={} alt=""/>
				<section dangerouslySetInnerHTML={{ __html: post.html }} />
			</ArticleContainer>

			<Contact />
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
