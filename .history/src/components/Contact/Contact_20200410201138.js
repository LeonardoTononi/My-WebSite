import React from 'react';
import { Icon, InlineIcon } from '@iconify/react'; 
import mailIcon from '@iconify/icons-entypo/mail';

import { ContactContainer, SocialLink } from './Contact.styles';
const Contact = () => {
	return (
		<ContactContainer>
			<p>
				I am available for freelancer jobs and to work in your company. If you think I would be a good fit for
				you, send me an email.
			</p>
			<SocialLink>
				<a href=''>Mail</a>
			</SocialLink>
			<SocialLink>
				<a href=''>Github</a>
			</SocialLink>
			<SocialLink>
				<a href=''>Linkedin</a>
			</SocialLink>
		</ContactContainer>
	);
};

export default Contact;
