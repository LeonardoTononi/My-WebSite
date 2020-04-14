import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import BlogHeader from '../components/BlogHeader/BlogHeader';
import Contact from '../components/Contact/Contact';

import PostImg from '../../content/assets/comingsoon.svg';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

const BlogPreviewContainer = styled.article`
	position: relative;
	max-width: 1200px;
	margin: 20em auto;
	padding: 8rem 2rem;
	background: rgba(220, 219, 234, 0.3);
	border-radius: 10px;
	display: grid;
	grid-gap: 1rem;
	justify-content: start;
	align-content: center;
	align-items: center;
	grid-template-areas: "img" "header" "sub";

	@media only screen and (min-width: 800px) {
		grid-template-areas: "img header header" "img sub sub";
		margin: 5rem auto;
		padding: 8rem 2rem 8rem 5rem;
	}

	header {
		grid-area: header;

		@media only screen and (min-width: 800px) {
			padding-left: 2rem;
		}

		h3 {
			margin: 0;
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
			margin: 0;
			font-size: 1.1rem;
			letter-spacing: 0.05em;
			color: rgba(63, 61, 86, 0.6);
		}
	}
`;

const PostImage = styled.img`
	grid-area: img;
	width: 200px;
	height: 200px;
	position: absolute;
	bottom: 1.5rem;
	object-fit: cover;
	margin: 0;

	@media only screen and (min-width: 800px) {
		position: initial;
		left: 50%;
		bottom: 40%;
		padding-right: 2rem;
	}
`;

const Tags = styled.div`display: flex;`;

const Tag = styled.div`
	padding: .1rem .5rem;
	background: ${(props) => (props.coding ? '#ddddff' : '#ffc4c4')};
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
					<BlogPreviewContainer key={node.fields.slug}>
						<PostImage src={PostImg} alt='' />
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
					</BlogPreviewContainer>
				);
			})}
			<Contact id='contact' />
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
