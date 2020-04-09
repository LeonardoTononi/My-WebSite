import React from "react"
import { ProjectContainer, Description } from './Project.styles'

const Project = ({ text, tags, GitHubLink, LiveLink }) => {
  return (
    <ProjectContainer>
      <Description>{text}</Description>
      <div>
        {tags.map(tag => (
          <p># {tag}</p>
        ))}
      </div>
      <di>
        <a href={GitHubLink}>Github</a>
        <a href={LiveLink}>www</a>
      </di>
    </ProjectContainer>
  )
}

export default Project
