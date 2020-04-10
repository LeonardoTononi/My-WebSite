import React from 'react';
import { SkillsContainer } from './Skills.styled'

import HtmlIcon from '../../assets/skills/html-5.svg'
import CssIcon from '../../assets/skills/css-3.svg'

const Skills = () => {

 
  return (
    <SkillsContainer numberElem="4">
      <ul>
        <li><img src={HtmlIcon} alt="html icon"/> Html</li>
        <li><img src={CssIcon} alt="html icon" /> Css</li>
        <li><img src={CssIcon} alt="html icon" /> Sass</li>
        <li><img src={CssIcon} alt="html icon" /> JavaScript</li>
        <li><img src={CssIcon} alt="html icon" /> React.js</li>
        <li><img src={CssIcon} alt="html icon" /> Redux</li>
        <li><img src={CssIcon} alt="html icon" /> Gatsby.js</li>
        <li><img src={CssIcon} alt="html icon" /> Progressive Web App</li>
        <li><img src={CssIcon} alt="html icon" /> Firebase</li>
        <li><img src={CssIcon} alt="html icon" /> MongoDB</li>
        <li><img src={CssIcon} alt="html icon" /> Node.js</li>
        <li><img src={CssIcon} alt="html icon" /> Express</li>
        <li><img src={CssIcon} alt="html icon" /> Figma</li>
      </ul>
    </SkillsContainer>
  );
};

export default Skills;