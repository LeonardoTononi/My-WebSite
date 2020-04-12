import React from 'react';

import { StyledHeader, Tags } from './BlogPostHeader.styles';

const BlogPostHeader = ({ title, date }) => {
	return (
		<StyledHeader>
			<h5>Leonardo Tononi</h5>
			<h1>{title}</h1>
			<p>{date}</p>
			<Tags>
				<Tag coding>Coding</Tag>
				<Tag>Productivity</Tag>
			</Tags>
		</StyledHeader>
	);
};

export default BlogPostHeader;
