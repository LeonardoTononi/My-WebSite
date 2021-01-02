import React from "react"
import { Link } from "gatsby"
import { createGlobalStyle } from "styled-components"

import { LayoutContainer, NavContainer, NavList, StyledFooter } from './Layout.styles'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700,900|Playfair+Display:400,500,700&display=swap');
  
  body {
    font-family: 'Nunito Sans', sans-serif;
    color: ${({ theme }) => theme.mint};
    font-size: 16px;
  }
  a {
    text-decoration: none;
    box-shadow: none;
    color: ${({ theme }) => theme.mint}; 
  }

  h1,h2,h4,h5 {
    font-family: 'Nunito Sans', sans-serif;
  }
  h3 {
    font-family: 'Playfair Display', serif;
  }
`

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyle />
      <NavContainer>
        <NavList>
          <li>
            <Link to="/">Project</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>Contact</li>
        </NavList>
      </NavContainer>
      <main>{children}</main>
      <StyledFooter>leonardotononi@gmail.com</StyledFooter>
    </LayoutContainer>
  )
}



export default Layout
