import React from 'react';

import { AboutContainer, Text, ImageStyled } from './About.styles';

import MyPhoto from '../../assets/leo-black.png';

const About = () => {
	return (
		<AboutContainer>
			<Text>
				I have <strong>two year of experience</strong> in web developing and I’m a self though programmer. I’m proficient with <strong>React</strong> and I can say to have built solid basis to deal with this framework. I also know how to deal with <strong>Redux and Gatsby</strong>.
			</Text>
			<ImageStyled src={MyPhoto} alt='' />
			<Text>
				I fell to enjoy the power of those technology and currently I also started studying ReactNative. I really like having to deal with new challenges and problems to solve, I am not afraid to learn new things.
			</Text>
		</AboutContainer>
	);
};

export default About;
