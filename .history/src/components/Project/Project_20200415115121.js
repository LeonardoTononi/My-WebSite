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

const Project = ({ text, tags, GitHubLink, LiveLink, firstProject, imgLink, mobile, workingOn, order1, order2 }) => {
	return (
		<React.Fragment>
			{firstProject ? <Title>What I've done recently</Title> : <Space />}
			{workingOn ? <Title>What I'm currently working on</Title> : null}
			<ProjectContainer>
				<Column order1={order1}>
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
				</Column>
				<Column order2={order2}>
					{/* <Description>{text}</Description> */}
					<h4>
						Tourism <br /> Web Application
					</h4>
					<Tags>{tags.map((tag) => <p>{tag}</p>)}</Tags>
				</Column>
			</ProjectContainer>
		</React.Fragment>
	);
};

export default Project;
