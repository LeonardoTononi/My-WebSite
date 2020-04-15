import React, { Fragment } from 'react';
import {
	ProjectContainer,
	ProjectImageMobile,
	ProjectImageDesk,
	ProjectTitle,
	ProjectNumb,
	Tags,
	Tag,
	SocialsContainer,
	ColumnText,
	ColumnMedia,
	Title,
	Space
} from './Project.styles';

import GithubIcon from '../../assets/github.svg';
import WebIcon from '../../assets/web.png';

const Project = ({ text, tags, GitHubLink, LiveLink, firstProject, imgLink, mobile, workingOn, order1, order2 }) => {
	return (
		<React.Fragment>
			{firstProject ? <Title>What I've done recently</Title> : <Space />}
			{workingOn ? <Title>What I'm currently working on</Title> : null}
			<ProjectContainer>
				<ColumnText order2={order2}>
					<ProjectNumb>#1</ProjectNumb>
					<ProjectTitle>
						Tourism <br /> Web Application
					</ProjectTitle>
					<Tags>{tags.map((tag) => <Tag>{tag}</Tag>)}</Tags>
				</ColumnText>
				<ColumnMedia order1={order1}>
					{mobile ? <ProjectImageMobile src={imgLink} alt='' /> : <ProjectImageDesk src={imgLink} alt='' />}
					{GitHubLink && LiveLink ? (
						<SocialsContainer>
							<a href={LiveLink} target='t_blank'>
								Live view
							</a>
							<a href={GitHubLink} target='t_blank'>
								Github
							</a>
						</SocialsContainer>
					) : null}
				</ColumnMedia>
			</ProjectContainer>
		</React.Fragment>
	);
};

export default Project;
