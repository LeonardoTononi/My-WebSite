import React from "react"

import  BgHeader from '../BgHeader/BgHeader'
import { StyledHeader } from './BlogHeader.styles'

const BlogHeader = () => {
  return (
    <StyledHeader>
      <BgHeader />
      <h5>Leonardo Tononi</h5>
      <h1>Blog</h1>
      <h4>Subscribe to receive my new post directly to your inbox.</h4>
      
    </StyledHeader>
  )
}

export default BlogHeader
