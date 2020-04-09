import React from "react"
import { ProjectContainer, Description, Tag } from './Project.styles'

const Project = ({ text, tags, GitHubLink, LiveLink }) => {
  return (
    <ProjectContainer>
      <Description>{text}</Description>
      <Tag>
        {tags.map(tag => (
          <p># {tag}</p>
        ))}
      </Tag>
      <di>
        <a href={GitHubLink}>Github</a>
        <a href={LiveLink}>www</a>
      </di>
    </ProjectContainer>
  )
}

export default Project
