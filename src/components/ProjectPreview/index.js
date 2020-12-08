import React from 'react';
import { useProjectData } from './useProjectData';
import {
  Title,
  ProjectsPreview,
  Wrapper,
  StyledLink,
  StyledImg,
} from './style';

const ProjectPreview = () => {
  const projects = useProjectData();

  return (
    <Wrapper>
      <Title>What I've done recently?</Title>
      <ProjectsPreview>
        {projects.map(project => (
          <StyledLink to={`project/${project.slug}`}>
            <span>View Project Details</span>
            <StyledImg fluid={project.img} style={{ margin: '0 auto' }} />
          </StyledLink>
        ))}
      </ProjectsPreview>
    </Wrapper>
  );
};

export default ProjectPreview;
