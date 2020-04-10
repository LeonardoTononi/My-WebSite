import React from 'react';
import styled from 'styled-components'
import { Icon, InlineIcon } from '@iconify/react'; 
import mailIcon from '@iconify/icons-entypo/mail';
import githubFilled from '@iconify/icons-ant-design/github-filled';
import linkedinIcon from '@iconify/icons-zmdi/linkedin';

import { ContactContainer, SocialLink } from './Contact.styles';

const IconSocial = styled(Icon)`
font-size: 45px;
`

const Contact = () => {
	return (
		<ContactContainer>
			<p>
				I am available for freelancer jobs and to work in your company. If you think I would be a good fit for
				you, send me an email.
			</p>
			<SocialLink>
        <a href='mailto:leonardotononi@gmail.com'><IconSocial icon={mailIcon} /></a>
			</SocialLink>
			<SocialLink>
				<a href='https://github.com/Easaaa' target="_blank"><IconSocial icon={githubFilled}/></a>
			</SocialLink>
			<SocialLink>
				<a href='https://www.linkedin.com/in/leonardo-tononi/' target="_blank"><IconSocial icon={linkedinIcon} /></a>
			</SocialLink>
		</ContactContainer>
	);
};

export default Contact;
