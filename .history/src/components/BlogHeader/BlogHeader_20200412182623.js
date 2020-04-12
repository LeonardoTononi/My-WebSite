import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import BgHeader from '../BgHeader/BgHeader';
import { StyledHeader, FormSubscribe, SubmitInput } from './BlogHeader.styles';

const BlogHeader = () => {
	const [ result, setResult ] = useState(null);
	const [ email, setEmail ] = useState('');

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		addToMailchimp(this.state.email, this.state)
			.then(({ msg, result }) => {
				console.log('msg', `${result}: ${msg}`);

				if (result !== 'success') {
					throw msg;
				}
				alert(msg);
			})
			.catch((err) => {
				console.log('err', err);
				alert(err);
			});
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
			<FormSubscribe onSubmit={() => handleSubmit(email)}>
				<input type='email' placeholder='Your E-mail' value={email} onChange={handleEmail} />
				<SubmitInput type='submit'>Subscribe</SubmitInput>
			</FormSubscribe>
		</StyledHeader>
	);
};

export default BlogHeader;
