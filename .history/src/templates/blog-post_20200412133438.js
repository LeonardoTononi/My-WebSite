import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import Contact from '../components/Contact/Contact';
import { rhythm, scale } from '../utils/typography';

const ArticleContainer = styled.article`
	position: relative;
	max-width: 1000px;
	margin: 20em auto;
	padding: 6rem 2rem;
	background: rgba(220, 219, 234, 0.3);
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
			color: ${({ theme }) => theme.mint};
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

const Tags = styled.div`display: flex;`;

const Tag = styled.div`
	padding: .1rem .5rem;
	background: ${(props) => (props.coding ? '#5DCC7C' : '#5DB8CC')};
	border-radius: 5px;
	margin: 1rem .2rem;
	font-size: .9rem;
`;

const BlogPostTemplate = ({ data, pageContext, location }) => {
	const post = data.markdownRemark;
	const siteTitle = data.site.siteMetadata.title;
	const { previous, next } = pageContext;

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
			<ArticleContainer>
				<header>
					<h1
						style={{
							marginTop: rhythm(1),
							marginBottom: 0
						}}>
						{post.frontmatter.title}
					</h1>
					<p
						style={{
							...scale(-1 / 5),
							display: `block`,
							marginBottom: rhythm(1)
						}}>
						{post.frontmatter.date}
					</p>
				</header>
				<section dangerouslySetInnerHTML={{ __html: post.html }} />
				<hr
					style={{
						marginBottom: rhythm(1)
					}}
				/>
			</ArticleContainer>

			<nav>
				<ul
					style={{
						display: `flex`,
						flexWrap: `wrap`,
						justifyContent: `space-between`,
						listStyle: `none`,
						padding: 0
					}}>
					<li>
						{previous && (
							<Link to={previous.fields.slug} rel='prev'>
								← {previous.frontmatter.title}
							</Link>
						)}
					</li>
					<li>
						{next && (
							<Link to={next.fields.slug} rel='next'>
								{next.frontmatter.title} →
							</Link>
						)}
					</li>
				</ul>
			</nav>
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
