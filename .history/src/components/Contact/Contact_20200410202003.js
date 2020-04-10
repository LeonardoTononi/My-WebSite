import React from 'react';

import { Icon, InlineIcon } from '@iconify/react'; 
import mailIcon from '@iconify/icons-entypo/mail';
import githubFilled from '@iconify/icons-ant-design/github-filled';
import linkedinIcon from '@iconify/icons-zmdi/linkedin';

import { ContactContainer, SocialLink } from './Contact.styles';


const Contact = () => {
	return (
		<ContactContainer>
			<p>
				I am available for freelancer jobs and to work in your company. If you think I would be a good fit for
				you, send me an email.
			</p>
			<SocialLink>
        <a href=''><Icon icon={mailIcon} style={{ fontSize: '40px'}}/></a>
			</SocialLink>
			<SocialLink>
				<a href=''><Icon icon={githubFilled}/></a>
			</SocialLink>
			<SocialLink>
				<a href=''><Icon icon={linkedinIcon} /></a>
			</SocialLink>
		</ContactContainer>
	);
};

export default Contact;
