import React from "react"

import {BgHeader} from '../BgHeader/BgHeader'
import { StyledHeader, DownloadButton } from './Header.styles'

const Header = () => {
  return (
    <StyledHeader>
      <BgHeader />
      <h5>Leonardo Tononi</h5>
      <h1>React Developer</h1>
      <h4>I Love Learning</h4>
      <h4>I'm a Team Player</h4>
      <h4>I'm Really Determinate</h4>
      <DownloadButton>
        <a href="" download>
          Download Resume
      </a>
      </DownloadButton>
    </StyledHeader>
  )
}

export default Header
