import React from 'react';
import { ProjectContainer, ImageProto, Description, Tags, SocialsContainer } from './Project.styles';

import BestfiveImg from '../../assets/projects/bestfive.png';
import GithubIcon from '../../assets/github.svg';
import WebIcon from '../../assets/web.png';

const Project = ({ text, tags, GitHubLink, LiveLink }) => {
	return (
		<ProjectContainer>
			<div>
				<ImageProto src={BestfiveImg} alt='' />
			</div>
			<div>
				<Description>{text}</Description>
				<Tags>{tags.map((tag) => <p># {tag}</p>)}</Tags>
				<SocialsContainer>
					<a href={GitHubLink} target='t_blank'>
						<img src={GithubIcon} alt='github icon' />
					</a>
					<a href={LiveLink} target='t_blank'>
						<img src={WebIcon} alt='web icon' />
					</a>
				</SocialsContainer>
			</div>
		</ProjectContainer>
	);
};

export default Project;
