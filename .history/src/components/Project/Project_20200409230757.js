import React from "react"
import { ProjectContainer, Description, Tags, SocialsContainer } from './Project.styles'

const Project = ({ text, tags, GitHubLink, LiveLink }) => {
  return (
    <ProjectContainer>
      <Description>{text}</Description>
      <Tags>
        {tags.map(tag => (
          <p># {tag}</p>
        ))}
      </Tags>
      <SocialsContainer>
        <a href={GitHubLink}>Github</a>
        <a href={LiveLink}>www</a>
      </SocialsContainer>
    </ProjectContainer>
  )
}

export default Project
