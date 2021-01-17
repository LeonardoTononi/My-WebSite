import React from 'react';

import { StyledHeader } from './style';
import { Tag, Tags } from '../../templates/Blog/style';

const BlogPostHeader = ({ title, date, tags, time }) => {
  return (
    <StyledHeader>
      <h5>Leonardo Tononi</h5>
      <h1>{title}</h1>

      <Tags>
        {tags?.map(tag => (
          <Tag type={tag.toLowerCase()}>{tag}</Tag>
        ))}
      </Tags>
      <p>
        {date} · {time} min read
      </p>
    </StyledHeader>
  );
};

export default BlogPostHeader;
