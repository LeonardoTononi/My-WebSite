import React, { useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "reactjs-popup/dist/index.css"

import {
  ProjectContainer,
  Question,
  ColumnText,
  ColumnMedia,
  Title,
  ProjectsPreview,
  Wrapper,
  StyledPopup,
  CloseBtn,
  ProjectImg,
  PersonalImg,
} from "./Project.styles"

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

  useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data])

  return (
    <Wrapper>
      <Title>What I've done recently?</Title>
      <ProjectsPreview>
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
          <ProjectContainer>
            <CloseBtn onClick={() => ref.current.close()}>Close</CloseBtn>
            <PersonalImg fluid={data.MeImg.childImageSharp.fluid} />
            <ColumnMedia>
              <ProjectImg
                fluid={data.IphoneImg.childImageSharp.fluid}
                style={{ maxWidth: "400px", margin: "0 auto" }}
              />
            </ColumnMedia>
            <ColumnText>
              <Question>
                <h4>How is called?</h4>
                <ul>
                  <li>{DiamondIcon} A Tourism web app.</li>
                </ul>
              </Question>
              <Question>
                <h4>How is built it?</h4>
                <ul>
                  <li>{DiamondIcon} JavaScript</li>
                  <li>{DiamondIcon} Firebase</li>
                  <li>{DiamondIcon} Google Maps</li>
                  <li>{DiamondIcon} Google Analytics</li>
                </ul>
              </Question>
              <Question>
                <h4>Useful links?</h4>
                <ul>
                  <li>
                    <a href="https://bestfivebcn.com/" target="_blank">
                      {DiamondIcon} Live Demo
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Easaaa/Bestfive-bcn"
                      target="_blank"
                    >
                      {DiamondIcon} Git Hub
                    </a>
                  </li>
                </ul>
              </Question>
              <Question>
                <h4>My thought about this project...</h4>
                <p>
                  I built this app because lorem ipsum dolor sit amet,
                  consectetur adip lorem, consectetur adipiscing elit.
                </p>
              </Question>
            </ColumnText>
          </ProjectContainer>
        </StyledPopup>
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
          <ProjectContainer>
            <CloseBtn onClick={() => ref.current.close()}>Close</CloseBtn>
            <PersonalImg fluid={data.MeImg.childImageSharp.fluid} />
            <ColumnMedia>
              <ProjectImg
                fluid={data.IphoneImg.childImageSharp.fluid}
                style={{ maxWidth: "400px", margin: "0 auto" }}
              />
            </ColumnMedia>
            <ColumnText>
              <Question>
                <h4>How is called?</h4>
                <ul>
                  <li>{DiamondIcon} A Tourism web app.</li>
                </ul>
              </Question>
              <Question>
                <h4>How is built it?</h4>
                <ul>
                  <li>{DiamondIcon} JavaScript</li>
                  <li>{DiamondIcon} Firebase</li>
                  <li>{DiamondIcon} Google Maps</li>
                  <li>{DiamondIcon} Google Analytics</li>
                </ul>
              </Question>
              <Question>
                <h4>Useful links?</h4>
                <ul>
                  <li>
                    <a href="https://bestfivebcn.com/" target="_blank">
                      {DiamondIcon} Live Demo
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Easaaa/Bestfive-bcn"
                      target="_blank"
                    >
                      {DiamondIcon} Git Hub
                    </a>
                  </li>
                </ul>
              </Question>
              <Question>
                <h4>My thought about this project...</h4>
                <p>
                  I built this app because lorem ipsum dolor sit amet,
                  consectetur adip lorem, consectetur adipiscing elit.
                </p>
              </Question>
            </ColumnText>
          </ProjectContainer>
        </StyledPopup>
      </ProjectsPreview>
    </Wrapper>
  )
}

export default Project
