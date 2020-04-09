import React from "react"
import { ProjectContainer } from './Project.styles'

const Project = ({ text, tags, GitHubLink, LiveLink }) => {
  return (
    <ProjectContainer>
      <p>{text}</p>
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
