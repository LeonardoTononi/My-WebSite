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
      <div>
        <a href={GitHubLink}>Github</a>
        <a href={LiveLink}>www</a>
      </div>
    </ProjectContainer>
  )
}

export default Project
