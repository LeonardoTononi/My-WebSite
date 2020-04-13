import React, { useState } from 'react';

import BgHeader from '../BgHeader/BgHeader';
import BlogSubscribeButton from '../BlogSubscribeButton/BlogSubscribeButton';
import { StyledHeader } from './BlogHeader.styles';

const BlogHeader = () => {
	return (
		<StyledHeader>
			<h5>Leonardo Tononi</h5>
			<h1>Blog</h1>
			<h4>
				Subscribe to receive my new post <br /> directly to your inbox.
			</h4>
			<p>No spam guaranteed.</p>
			<BlogSubscribeButton />
		</StyledHeader>
	);
};

export default BlogHeader;
