import React from "react"
import { Link } from "gatsby"

const Layout = () => {
  return (
    <>
      <header>{header}</header>
      <main>{children}</main>
      <footer>leonardotononi@gmail.com</footer>
    </>
  )
}

export default Layout
