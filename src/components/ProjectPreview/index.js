import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Title,
  ProjectsPreview,
  Wrapper,
  StyledLink,
  StyledImg,
} from './style';

const ProjectPreview = ({ projects }) => {
  return (
    <Wrapper>
      <Title>What I've done recently?</Title>
      <ProjectsPreview>
        {projects.map(project => (
          <StyledLink to={`project/${project.node.frontmatter.slug}`}>
            <span>View Project Details</span>

            <StyledImg
              fluid={
                project?.node.frontmatter.imagePreview?.childImageSharp.fluid
              }
              style={{ margin: '0 auto' }}
            />
          </StyledLink>
        ))}
      </ProjectsPreview>
    </Wrapper>
  );
};

export default ProjectPreview;
