import React from 'react';

import { StyledHeader, ButtonSubscribe } from './BlogPostHeader.styles';

const BlogPostHeader = ({ title }) => {
	return (
		<StyledHeader>
			<h5>Leonardo Tononi</h5>
			<h1>{title}</h1>
		</StyledHeader>
	);
};

export default BlogPostHeader;
