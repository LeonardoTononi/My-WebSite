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

const Project = ({
	title,
	numb,
	tags,
	GitHubLink,
	LiveLink,
	firstProject,
	imgLink,
	mobile,
	workingOn,
	order1,
	order2,
	alignEnd
}) => {
	return (
		<Fragment>
			{firstProject ? <Title>What I've done recently</Title> : <Space />}
			{workingOn ? <Title>What I'm currently working on</Title> : null}
			<ProjectContainer>
				<ColumnText order1={order1}>
					<ProjectNumb>{numb}</ProjectNumb>
					<ProjectTitle>{title}</ProjectTitle>
					<Tags alignEnd>{tags.map((tag) => <Tag>{tag}</Tag>)}</Tags>
				</ColumnText>
				<ColumnMedia order2={order2}>
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
		</Fragment>
	);
};

export default Project;
