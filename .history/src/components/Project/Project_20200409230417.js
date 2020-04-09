import React from "react"
import { ProjectContainer, Description, Tags } from './Project.styles'

const Project = ({ text, tags, GitHubLink, LiveLink }) => {
  return (
    <ProjectContainer>
      <Description>{text}</Description>
      <Tags>
        {tags.map(tag => (
          <p># {tag}</p>
        ))}
      </Tags>
      <di>
        <a href={GitHubLink}>Github</a>
        <a href={LiveLink}>www</a>
      </di>
    </ProjectContainer>
  )
}

export default Project
