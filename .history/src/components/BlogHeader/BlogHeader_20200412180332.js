import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import BgHeader from '../BgHeader/BgHeader';
import { StyledHeader, FormSubscribe } from './BlogHeader.styles';

const BlogHeader = () => {
	const [ result, setResult ] = useState();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(e);
		const result = await addToMailchimp(email, listFields);
		const toStaate = await setResult(result);
		console.log(result);
		// I recommend setting `result` to React state
		// but you can do whatever you want
	};

	return (
		<StyledHeader>
			<BgHeader />
			<h5>Leonardo Tononi</h5>
			<h1>Blog</h1>
			<h4>
				Subscribe to receive my new post <br /> directly to your inbox.
			</h4>
			<p>No spam guaranteed.</p>
			<FormSubscribe onSubmit={handleSubmit(email, { listFields })}>
				<input type='email' placeholder='Your E-mail' />
				<button type='submit'>Subscribe</button>
			</FormSubscribe>
		</StyledHeader>
	);
};

export default BlogHeader;
