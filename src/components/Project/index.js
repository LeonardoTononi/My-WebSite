import React, { useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { useProjectData } from "./data"

import { ProjectDetails } from "../ProjectDetails"
import "reactjs-popup/dist/index.css"
import { Title, ProjectsPreview, Wrapper, StyledPopup } from "./style"

const Project = () => {
  const ref = useRef()
  const closeModal = () => ref.current.close()
  const projects = useProjectData()

  const data = useStaticQuery(graphql`
    query {
      IphoneImg: file(relativePath: { eq: "Iphone.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      HotelMac: file(relativePath: { eq: "hotel-mac.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      MeImg: file(relativePath: { eq: "leo.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Title>What I've done recently?</Title>
      <ProjectsPreview>
        {projects.map(project => (
          <StyledPopup
            trigger={
              <button>
                <Img
                  fadeIn={true}
                  fluid={project.img}
                  style={{ margin: "0 auto" }}
                />
              </button>
            }
            position="center center"
            modal
            ref={ref}
          >
            <ProjectDetails
              data={data}
              projectData={project}
              closeModal={closeModal}
            />
          </StyledPopup>
        ))}
      </ProjectsPreview>
    </Wrapper>
  )
}

export default Project
