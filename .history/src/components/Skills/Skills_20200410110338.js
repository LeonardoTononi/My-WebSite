import React from 'react';
import { SkillsContainer } from './Skills.styled'
import HtmlIcon from '../../assets/skills/html-5.svg'

const Skills = () => {

 
  return (
    <SkillsContainer numberElem="4">
      <ul>
        <li><img src={HtmlIcon} alt="html icon"/>Html</li>
        <li>Css</li>
        <li>Sass</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Redux</li>
        <li>Gatsby.js</li>
        <li>Progressive Web App</li>
        <li>Firebase</li>
        <li>MongoDB</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Figma</li>
      </ul>
    </SkillsContainer>
  );
};

export default Skills;