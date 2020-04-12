import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import BgHeader from '../BgHeader/BgHeader';
import { StyledHeader, FormSubscribe } from './BlogHeader.styles';

const BlogHeader = () => {
	const [ result, setResult ] = useState(null);
	const [ email, setEmail ] = useState(null);

	const handleEmail = (e) => {
		console.log(e.target.value);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await addToMailchimp(email);
		const toState = await setResult(result);
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
			<FormSubscribe>
				<input type='email' placeholder='Your E-mail' value={email} onChange={handleEmail} />
				<button type='submit'>Subscribe</button>
			</FormSubscribe>
		</StyledHeader>
	);
};

export default BlogHeader;
