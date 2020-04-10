import React from "react"
import { Link } from "gatsby"
import { createGlobalStyle } from "styled-components"

import { LayoutContainer, NavContainer, NavList, StyledFooter } from './Layout.styles'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700,900|Playfair+Display:400,500,700&display=swap');

  :root {
  --marquee-width: 80vw;
  --marquee-height: 20vh;
  /* --marquee-elements: 12; */ /* defined with JavaScript */
  --marquee-elements-displayed: 5;
  --marquee-element-width: calc(var(--marquee-width) / var(--marquee-elements-displayed));
  --marquee-animation-duration: calc(var(--marquee-elements) * 3s);
}
  
  body {
    font-family: 'Nunito Sans', sans-serif;
    color: #3F3D56;
    font-size: 16px;
  }
  a {
    text-decoration: none;
    box-shadow: none;
    color: #3F3D56; 
  }

  h2,h4,h5 {
    font-family: 'Nunito Sans', sans-serif;
  }
  h1,h3 {
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
