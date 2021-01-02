import React from "react"
import { Link } from "gatsby"
import { createGlobalStyle } from "styled-components"

import { LayoutContainer, NavContainer, NavList } from './Layout.styles'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700,900|Playfair+Display:400,500,700&display=swap');
  
  body {
    font-family: 'Nunito Sans', sans-serif;
    color: ${({ theme }) => theme.mint};
  }
  a {
    text-decoration: none;
    box-shadow: none;
    color: ${({ theme }) => theme.mint}; 
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
      <footer>leonardotononi@gmail.com</footer>
    </LayoutContainer>
  )
}

export default Layout
