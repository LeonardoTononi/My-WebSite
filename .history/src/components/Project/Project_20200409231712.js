import React from "react"
import { ProjectContainer, Description, Tags, SocialsContainer } from './Project.styles'

import GithubIcon from '../../assets/github.svg'
import WebIcon from '../../assets/web.png'

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
        <a href={GitHubLink} target="t_blank"><img src={GithubIcon} alt=""/></a>
        <a href={LiveLink}><img src={WebIcon} alt=""/></a>
      </SocialsContainer>
    </ProjectContainer>
  )
}

export default Project
