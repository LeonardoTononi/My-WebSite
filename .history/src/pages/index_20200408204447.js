import React from "react"
import { Link, graphql } from "gatsby"

import Header from "../components/Header/Header"
import Project from "../components/Project/Project"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="My web site" />
      <Header />
      <h3>What I've done recently</h3>
      <Project text="I created this web app with my girlfriend, born from a common idea of ​​simplifying our possible choices to go to an outdoor place on a sunny day. It is essentially a pwa created without the need for additional frameworks." tags={["JavaScript", "PWA", "Google Analytics", "SEO", "Google Maps API"]} GitHubLink="https://github.com/Easaaa/Bestfive-bcn" LiveLink="https://bestfivebcn.com/"/>
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
