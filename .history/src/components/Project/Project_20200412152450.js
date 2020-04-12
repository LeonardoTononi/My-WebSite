import React, { Fragment } from 'react';
import { ProjectContainer, ImageProto, Description, Tags, SocialsContainer, Column, Title } from './Project.styles';

import GithubIcon from '../../assets/github.svg';
import WebIcon from '../../assets/web.png';

const Project = ({ text, tags, GitHubLink, LiveLink, firstProject, imgLink }) => {
	return (
		<React.Fragment>
			{firstProject ? <Title>What I've done recently</Title> : <Spa}
			<ProjectContainer>
				<Column>
					<ImageProto src={imgLink} alt='' />
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
		</React.Fragment>
	);
};

export default Project;
