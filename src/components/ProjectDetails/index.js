import React from "react"

import {
  ProjectContainer,
  Question,
  ColumnText,
  ColumnMedia,
  CloseBtn,
  ProjectImg,
  PersonalImg,
} from "./style"

import { VscDebugBreakpointLog } from "react-icons/vsc"

const DiamondIcon = <VscDebugBreakpointLog />

export const ProjectDetails = ({ ref, data, projectData }) => {
  return (
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
            <li>
              {DiamondIcon} {projectData.name}.
            </li>
          </ul>
        </Question>
        <Question>
          <h4>How is built it?</h4>
          <ul>
            {projectData.stack.map(item => (
              <li>
                {DiamondIcon} {item}
              </li>
            ))}
          </ul>
        </Question>
        <Question>
          <h4>Useful links?</h4>
          <ul>
            <li>
              <a href={projectData.demo_url} target="_blank">
                {DiamondIcon} Live Demo
              </a>
            </li>
            <li>
              <a href={projectData.github_url} target="_blank">
                {DiamondIcon} Git Hub
              </a>
            </li>
          </ul>
        </Question>
        <Question>
          <h4>My thought about this project...</h4>
          <p>{projectData.description}</p>
        </Question>
      </ColumnText>
    </ProjectContainer>
  )
}
