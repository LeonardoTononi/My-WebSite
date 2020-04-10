import React from "react"
import { ProjectContainer, Description, Tags, SocialsContainer } from './Project.styles'

import GithubIcon from '../../assets/github.svg'
import WebIcon from '../../assets/web.png'

const Project = ({ text, tags, GitHubLink, LiveLink }) => {
  return (
    <ProjectContainer>
      <img src={BestfiveImg} alt=""/>
      <Description>{text}</Description>
      <Tags>
        {tags.map(tag => (
          <p># {tag}</p>
        ))}
      </Tags>
      <SocialsContainer>
        <a href={GitHubLink} target="t_blank"><img src={GithubIcon} alt="github icon"/></a>
        <a href={LiveLink} target="t_blank"><img src={WebIcon} alt="web icon"/></a>
      </SocialsContainer>
    </ProjectContainer>
  )
}

export default Project
