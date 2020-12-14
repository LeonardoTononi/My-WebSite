import React from 'react';

import BlogSubscribeButton from '../BlogSubscribeButton';
import { StyledHeader } from './style';

const BlogHeader = () => (
  <StyledHeader>
    <h5>Leonardo Tononi</h5>
    <h1>Blog</h1>
    <h4>
      <mark>Welcome to my world,</mark> <br /> here you can find my blog posts,
      where I write about what I learn and like.
    </h4>
  </StyledHeader>
);

export default BlogHeader;
