import React from 'react';

import { StyledHeader, ButtonSubscribe } from './BlogPostHeader.styles';

const BlogPostHeader = ({ title }) => {
	return (
		<StyledHeader>
			<h5>Leonardo Tononi</h5>
			<h1>{title}</h1>
			<h4>
				Subscribe to receive my new post <br /> directly to your inbox.
			</h4>
			<p>No spam guaranteed.</p>
			<ButtonSubscribe>
				<input type='email' placeHolder='Your E-mail' />
				<button>Subscribe</button>
			</ButtonSubscribe>
		</StyledHeader>
	);
};

export default BlogPostHeader;
