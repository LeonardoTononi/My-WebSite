import React from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <footer>leonardotononi@gmail.com</footer>
    </>
  )
}

export default Layout
