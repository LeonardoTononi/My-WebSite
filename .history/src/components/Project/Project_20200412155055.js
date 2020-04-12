import React, { Fragment } from 'react';
import {
	ProjectContainer,
	ProjectImageMobile,
	ProjectImageDesk,
	Description,
	Tags,
	SocialsContainer,
	Column,
	Title,
	Space
} from './Project.styles';

import GithubIcon from '../../assets/github.svg';
import WebIcon from '../../assets/web.png';

const Project = ({ text, tags, GitHubLink, LiveLink, firstProject, imgLink, mobile, workingOn, order }) => {
	return (
		<React.Fragment>
			{firstProject ? <Title>What I've done recently</Title> : <Space />}
			{workingOn ? <Title>What I'm currently working on</Title> : null}
			<ProjectContainer>
				<Column order={order}>
					{mobile ? <ProjectImageMobile src={imgLink} alt='' /> : <ProjectImageDesk src={imgLink} alt='' />}
				</Column>
				<Column>
					<Description>{text}</Description>
					<Tags>{tags.map((tag) => <p># {tag}</p>)}</Tags>
					{GitHubLink && LiveLink ? (
						<SocialsContainer>
							<a href={GitHubLink} target='t_blank'>
								<img src={GithubIcon} alt='github icon' />
							</a>
							<a href={LiveLink} target='t_blank'>
								<img src={WebIcon} alt='web icon' />
							</a>
						</SocialsContainer>
					) : null}
				</Column>
			</ProjectContainer>
		</React.Fragment>
	);
};

export default Project;
