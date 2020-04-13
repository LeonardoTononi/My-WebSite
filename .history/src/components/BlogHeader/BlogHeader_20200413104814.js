import React, { useState } from 'react';
import BgHeader from '../BgHeader/BgHeader';
import { StyledHeader } from './BlogHeader.styles';

const BlogHeader = () => {
	return (
		<StyledHeader>
			<BgHeader />
			<h5>Leonardo Tononi</h5>
			<h1>Blog</h1>
			<h4>
				Subscribe to receive my new post <br /> directly to your inbox.
			</h4>
			<p>No spam guaranteed.</p>
			<FormSubscribe onSubmit={handleSubmit}>
				<EmailInput type='email' placeholder='Your E-mail' value={email} onChange={handleEmail} />
				<SubmitInput type='submit' value='Subscribe' />
			</FormSubscribe>
		</StyledHeader>
	);
};

export default BlogHeader;
