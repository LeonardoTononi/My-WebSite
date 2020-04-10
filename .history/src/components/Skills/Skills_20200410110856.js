import React from 'react';
import { SkillsContainer } from './Skills.styled'

import HtmlIcon from '../../assets/skills/html-5.svg'
import CssIcon from '../../assets/skills/css-3.svg'
import SassIcon from '../../assets/skills/sass.svg'
import JsIcon from '../../assets/skills/javascript.svg'
import ReactIcon from '../../assets/skills/react.svg'
import Redux from '../../assets/skills/redux.svg'



const Skills = () => {

 
  return (
    <SkillsContainer numberElem="4">
      <ul>
        <li><img src={HtmlIcon} alt="html icon"/> Html</li>
        <li><img src={CssIcon} alt="css icon" /> Css</li>
        <li><img src={SassIcon} alt=" icon" /> Sass</li>
        <li><img src={JsIcon} alt=" icon" /> JavaScript</li>
        <li><img src={ReactIcon} alt=" icon" /> React.js</li>
        <li><img src={ReduxIcon} alt=" icon" /> Redux</li>
        <li><img src={GatsbyIcon} alt=" icon" /> Gatsby.js</li>
        <li><img src={PwaIcon} alt=" icon" /> Progressive Web App</li>
        <li><img src={FirebaseIcon} alt=" icon" /> Firebase</li>
        <li><img src={MongoIcon} alt=" icon" /> MongoDB</li>
        <li><img src={NodeIcon} alt=" icon" /> Node.js</li>
        <li><img src={ExpressIcon} alt=" icon" /> Express</li>
        <li><img src={FigmaIcon} alt=" icon" /> Figma</li>
      </ul>
    </SkillsContainer>
  );
};

export default Skills;