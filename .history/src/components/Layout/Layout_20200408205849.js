import React from "react"
import { Link } from "gatsby"

import { NavContainer, NavList } from './Layout.styles'

const Layout = ({ children }) => {
  return (
    <>
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
    </>
  )
}

export default Layout
