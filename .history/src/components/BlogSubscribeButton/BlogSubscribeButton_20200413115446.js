import React, { useState, Fragment } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { FormSubscribe, EmailInput, SubmitInput } from './BlogSubscribeButton.styles';

const BlogSubscribeButton = () => {
	const [ result, setResult ] = useState(null);
	const [ email, setEmail ] = useState('');
	const [ successMsg, setSuccessMsg ] = useState(false);

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
				setSuccessMsg(!successMsg);
				setTimeout(cleanInput(), 2000);
			})
			.catch((err) => {
				console.log('err', err);
				alert(err);
			});
	};

	const cleanInput = () => {
		setEmail('');
		setSuccessMsg(false);
	};

	return (
		<Fragment>
			{successMsg ? (
				<div>
					<h5>Subscribed successfully!</h5>
				</div>
			) : null}

			<FormSubscribe onSubmit={handleSubmit}>
				<EmailInput type='email' placeholder='Your E-mail' value={email} onChange={handleEmail} />
				<SubmitInput type='submit' value='Subscribe' />
			</FormSubscribe>
		</Fragment>
	);
};

export default BlogSubscribeButton;
