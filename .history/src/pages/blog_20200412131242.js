import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import BlogHeader from '../components/BlogHeader/BlogHeader';
import Contact from '../components/Contact/Contact';

import PostImg from '../../content/assets/gameboy.svg';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

const ArticleContainer = styled.article`
	position: relative;
	max-width: 1000px;
	margin: 8em auto;
	padding: 4rem;
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
		bottom: 4rem;
	}

	header {
		grid-area: header;
		padding-left: 2rem;

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
		padding-left: 2rem;

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
							<Tags>
								<Tag coding>Coding</Tag>
								<Tag>Productivity</Tag>
							</Tags>
						</section>
					</ArticleContainer>
				);
			})}
			<Contact />
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
