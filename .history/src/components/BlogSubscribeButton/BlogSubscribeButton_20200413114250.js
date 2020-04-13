import React, { useState, Fragment } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { FormSubscribe, EmailInput, SubmitInput } from './BlogSubscribeButton.styles';

const BlogSubscribeButton = () => {
	const [ result, setResult ] = useState(null);
	const [ email, setEmail ] = useState('');

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addToMailchimp(email)
			.then(({ msg, result }) => {
				console.log('msg', `${result}: ${msg}`);
				setResult(result);
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
		<React.Fragment>
			<FormSubscribe onSubmit={handleSubmit}>
				<EmailInput type='email' placeholder='Your E-mail' value={email} onChange={handleEmail} />
				<SubmitInput type='submit' value='Subscribe' />
			</FormSubscribe>
		</React.Fragment>
	);
};

export default BlogSubscribeButton;
