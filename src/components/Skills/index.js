import React from 'react';

import Carousel from '../Carousel';
import { skillsArray } from './data';

import { SkillsContainer, SkillCard } from './style';
import { Title } from '../ProjectPreview/style';

const Skills = () => (
  <SkillsContainer numberElem="4">
    <Title>Skills</Title>
    <Carousel>
      {skillsArray.map(skill => (
        <SkillCard>
          <span>{skill.name}</span>
          <img src={skill.icon} />
        </SkillCard>
      ))}
    </Carousel>
  </SkillsContainer>
);

export default Skills;
