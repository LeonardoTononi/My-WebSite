import React from 'react';
import { ProjectContainer, ImageProto, Description, Tags, SocialsContainer, Column } from './Project.styles';

import BestfiveImg from '../../assets/projects/bestfive.png';
import GithubIcon from '../../assets/github.svg';
import WebIcon from '../../assets/web.png';

const Project = ({ text, tags, GitHubLink, LiveLink }) => {
	return (
		<ProjectContainer>
			<Column>
				<ImageProto src={BestfiveImg} alt='' />
			</Column>
			<Column>
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
			</Column>
		</ProjectContainer>
	);
};

export default Project;
