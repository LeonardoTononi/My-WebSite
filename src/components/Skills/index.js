import React from 'react';

import Carousel from '../Carousel';
import { skillsArray } from './data';

import { SkillsContainer, SkillCard } from './style';
import { Title } from '../ProjectPreview/style';

const Skills = () => (
  <SkillsContainer numberElem="4">
    <Title>Skills</Title>
    <Carousel>
      {skillsArray.map(skill => {
        const smallIcon = skill.name === 'WordPress' || skill.name === 'Strapi';
        const biggerWidth = {
          width: smallIcon && '80px',
        };
        return (
          <SkillCard>
            <span>{skill.name}</span>
            <img src={skill.icon} style={biggerWidth} />
          </SkillCard>
        );
      })}
    </Carousel>
  </SkillsContainer>
);

export default Skills;
