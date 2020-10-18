import React from "react"

import BlogSubscribeButton from "../BlogSubscribeButton"
import { StyledHeader } from "./style"

const BlogHeader = () => (
  <StyledHeader>
    <h5>Leonardo Tononi</h5>
    <h1>Blog</h1>
    <h4>
      Subscribe to receive my new post <br /> directly to your inbox.
    </h4>
    <p>No spam guaranteed.</p>
    <BlogSubscribeButton />
  </StyledHeader>
)

export default BlogHeader
