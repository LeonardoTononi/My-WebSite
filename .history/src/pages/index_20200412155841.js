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
				text='I created this web app with my girlfriend, born from a common idea of ​​simplifying our possible choices to go to an outdoor place on a sunny day. It is essentially a pwa created without the need for additional frameworks.'
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
				text='After creating the first application and having hard coded the data, clearly not the smartest thing, I thought of creating an administration page from where I can create and manage the data from the database and then pull it from the mobile web app. If you want have a look, write me an email, because you need the access.'
				tags={[ 'React.js', 'Redux', 'Firebase Auth', 'Firestore' ]}
				GitHubLink='https://github.com/Easaaa/admin-app-bestfive'
				LiveLink='https://bestfivebcn.netlify.com/'
			/>
			<Project
				imgLink={HotelImg}
				text='This project with a italian hotel was my first approach to programming. In 2018 I made a web site with multilingual support with plain Html, css and JavaScript. On this link you can see the previous web and below you can see the new web app that is nearly ready to be deployed and so how my skills and tastes have evolved.'
				tags={[ 'React.js', 'Gatsby', 'Mobile & Desktop View' ]}
				GitHubLink='https://github.com/Easaaa/hotel-vittoria-2020'
				LiveLink='https://hotelvittoria.netlify.com/'
			/>
			<Project
				imgLink={ToureAppImg}
				text='I am recreating the first application (bestfive). The aim is to create the application with React Native, building more complex features, such as a more functional map, with filters and better interactions.'
				tags={[ 'React.js', 'ReactNative', 'Firebase' ]}
				mobile
				workingOn
			/>
			<Skills />
			<About />
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
