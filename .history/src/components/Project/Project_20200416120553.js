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
					<ProjectNumb alignEnd={alignEnd}>{numb}</ProjectNumb>
					<ProjectTitle alignEnd={alignEnd}>{title}</ProjectTitle>
					<Tags alignEnd={alignEnd}>{tags.map((tag) => <Tag>{tag}</Tag>)}</Tags>
				</ColumnText>
				<ColumnMedia order2={order2}>
					{mobile ? (
						<ProjectImageMobile fluid={imgLink} alt='' />
					) : (
						<ProjectImageDesk fluid={imgLink} alt='' />
					)}
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
