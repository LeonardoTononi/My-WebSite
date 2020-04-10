import React from 'react';

import { AboutContainer, Text } from './About.styles';

import MyPhoto from '../../assets/leo-black.png';

const About = () => {
	return (
		<AboutContainer>
			<img src={MyPhoto} alt='' />
			<Text>
				I used to be a self thought poker player, that led me to live all around the world and learn new
				languages. By the end of 2018 I developed an interest in coding and now I can't stop programming.
			</Text>
		</AboutContainer>
	);
};

export default About;
