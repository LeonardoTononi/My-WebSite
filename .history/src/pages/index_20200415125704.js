import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

import Header from '../components/Header/Header';
import Project from '../components/Project/Project';
import Skills from '../components/Skills/Skills';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';

import BestfiveImg from '../assets/projects/bestfive.png';
import ToureoImg from '../assets/projects/toureo-admin.png';
import ToureAppImg from '../assets/projects/toureo-proto.png';
import HotelImg from '../assets/projects/hotelVittoria.png';

const Index = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title='My web site' />
			<Header />
			<Project
				imgLink={BestfiveImg}
				title='Tourism Web Application'
				numb='#1'
				tags={[ 'JavaScript', 'PWA', 'Google Analytics', 'SEO', 'Google Maps API' ]}
				GitHubLink='https://github.com/Easaaa/Bestfive-bcn'
				LiveLink='https://bestfivebcn.com/'
				order1='2'
				order2='1'
				firstProject
				mobile
			/>
			<Project
				imgLink={ToureoImg}
				title='Dashboard Administration App'
				numb='#2'
				tags={[ 'React.js', 'Redux', 'Firebase Auth', 'Firestore' ]}
				GitHubLink='https://github.com/Easaaa/admin-app-bestfive'
				LiveLink='https://bestfivebcn.netlify.com/'
			/>
			<Project
				imgLink={HotelImg}
				title='Tourism Web Application'
				numb='#3'
				tags={[ 'React.js', 'Gatsby', 'Mobile & Desktop View' ]}
				GitHubLink='https://github.com/Easaaa/hotel-vittoria-2020'
				LiveLink='https://hotelvittoria.netlify.com/'
				order1='2'
				order2='1'
			/>
			<Project
				imgLink={ToureAppImg}
				title='Tourism Web Application'
				numb='#4'
				tags={[ 'React.js', 'ReactNative', 'Firebase' ]}
				mobile
				workingOn
			/>
			<About />
			<Skills />
			<Contact id='contact' />
		</Layout>
	);
};

export default Index;

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
