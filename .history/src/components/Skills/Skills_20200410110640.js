import React from 'react';
import { SkillsContainer } from './Skills.styled'

import HtmlIcon from '../../assets/skills/html-5.svg'
import CssIcon from '../../assets/skills/css-3.svg'

const Skills = () => {

 
  return (
    <SkillsContainer numberElem="4">
      <ul>
        <li><img src={HtmlIcon} alt="html icon"/> Html</li>
        <li><img src={CssIcon} alt="css icon" /> Css</li>
        <li><img src={Icon} alt=" icon" /> Sass</li>
        <li><img src={Icon} alt=" icon" /> JavaScript</li>
        <li><img src={Icon} alt=" icon" /> React.js</li>
        <li><img src={Icon} alt=" icon" /> Redux</li>
        <li><img src={Icon} alt=" icon" /> Gatsby.js</li>
        <li><img src={Icon} alt=" icon" /> Progressive Web App</li>
        <li><img src={Icon} alt=" icon" /> Firebase</li>
        <li><img src={Icon} alt=" icon" /> MongoDB</li>
        <li><img src={Icon} alt=" icon" /> Node.js</li>
        <li><img src={Icon} alt=" icon" /> Express</li>
        <li><img src={Icon} alt=" icon" /> Figma</li>
      </ul>
    </SkillsContainer>
  );
};

export default Skills;