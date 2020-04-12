import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import BlogHeader from '../components/BlogHeader/BlogHeader';

import PostImg from '../../content/assets/gameboy.svg';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

const ArticleContainer = styled.article`
	max-width: 1000px;
	margin: 8em auto;
	padding: 4rem;
	background: rgba(220, 219, 234, 0.3);
	border-radius: 20px;
	display: grid;
	grid-gap: 1rem;
	place-content: center;
	align-items: center;
	grid-template-areas: "img header header" "img sub sub";

	img {
		grid-area: img;
		width: 200px;
		height: 200px;
	}

	header {
		grid-area: header;

		h3 {
			font-family: Playfair Display;
			font-style: normal;
			font-weight: bold;
			font-size: 3rem;
			line-height: 73px;
			display: flex;
			align-items: center;
			letter-spacing: 0.05em;
			color: #3f3d56;

			small {
				font-family: Nunito Sans;
				font-style: normal;
				font-weight: normal;
				font-size: 25px;
				line-height: 45px;
				/* or 180% */

				letter-spacing: 0.05em;

				color: rgba(63, 61, 86, 0.6);
			}
		}
	}

	section {
		grid-area: sub;
	}
`;

const BlogIndex = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;
	const posts = data.allMarkdownRemark.edges;

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title='All posts' />
			<BlogHeader />
			{posts.map(({ node }) => {
				const title = node.frontmatter.title || node.fields.slug;
				return (
					<ArticleContainer key={node.fields.slug}>
						<img src={PostImg} alt='' />
						<header>
							<h3>
								<Link style={{ boxShadow: `none` }} to={node.fields.slug}>
									{title}
								</Link>
							</h3>
							<small>{node.frontmatter.date}</small>
						</header>
						<section>
							<p
								dangerouslySetInnerHTML={{
									__html: node.frontmatter.description || node.excerpt
								}}
							/>
						</section>
					</ArticleContainer>
				);
			})}
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
