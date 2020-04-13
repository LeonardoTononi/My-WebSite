import React, { useState, Fragment } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { FormSubscribe, EmailInput, SubmitInput } from './BlogSubscribeButton.styles';

const BlogSubscribeButton = () => {
	const [ result, setResult ] = useState(null);
	const [ email, setEmail ] = useState('');
	const [ successMsg, setSuccessMsg ] = useState('');

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addToMailchimp(email)
			.then(({ msg, result }) => {
				setResult(result);
				if (result !== 'success') {
					throw msg;
				}
				setSuccessMsg(msg);
			})
			.then(() => {
				setTimeout(() => cleanInput, 3000);
			})
			.catch((err) => {
				console.log('err', err);
				alert(err);
			});
	};

	const cleanInput = () => {
		setEmail('');
		setSuccessMsg('');
	};

	return (
		<Fragment>
			{result === 'success' ? (
				<div>
					<h5>{successMsg}</h5>
				</div>
			) : (
				<div>Nothing</div>
			)}

			<FormSubscribe onSubmit={handleSubmit}>
				<EmailInput type='email' placeholder='Your E-mail' value={email} onChange={handleEmail} />
				<SubmitInput type='submit' value='Subscribe' />
			</FormSubscribe>
		</Fragment>
	);
};

export default BlogSubscribeButton;
