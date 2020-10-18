import React, { useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { projectsArray } from "./data"

import { ProjectDetails } from "../ProjectDetails"
import "reactjs-popup/dist/index.css"
import { Title, ProjectsPreview, Wrapper, StyledPopup } from "./style"
import { VscDebugBreakpointLog } from "react-icons/vsc"

const DiamondIcon = <VscDebugBreakpointLog />

const Project = () => {
  const ref = useRef()
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
        {projectsArray.map(project => (
          <StyledPopup
            trigger={
              <button>
                <Img
                  fadeIn={true}
                  fluid={data.IphoneImg.childImageSharp.fluid}
                  style={{ margin: "0 auto" }}
                />
              </button>
            }
            position="center center"
            modal
            ref={ref}
          >
            <ProjectDetails data={data} projectData={project} ref={ref} />
          </StyledPopup>
        ))}
      </ProjectsPreview>
    </Wrapper>
  )
}

export default Project
