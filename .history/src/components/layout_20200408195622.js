import React from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <ul>
          <li>Project</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>leonardotononi@gmail.com</footer>
    </>
  )
}

export default Layout
