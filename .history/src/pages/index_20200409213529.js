import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

import Header from "../components/Header/Header"
import Project from "../components/Project/Project"
import Skills from "../components/Skills/Skills"
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'


const ProjectTitle = styled.h3`
   font-size: 2.5rem;
   position: relative;
   left: 2rem;
`

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="My web site" />
      <Header />
      <ProjectTitle>What I've done recently</ProjectTitle>
      <Project text="I created this web app with my girlfriend, born from a common idea of ​​simplifying our possible choices to go to an outdoor place on a sunny day. It is essentially a pwa created without the need for additional frameworks." tags={["JavaScript", "PWA", "Google Analytics", "SEO", "Google Maps API"]} GitHubLink="https://github.com/Easaaa/Bestfive-bcn" LiveLink="https://bestfivebcn.com/" />
      <ProjectTitle>What I'm currently working on</ProjectTitle>

      <Skills />
      <About />
      <Contact />
    </Layout>
  )
}

export default Index

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
`
