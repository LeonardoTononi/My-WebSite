import React from 'react';
import { SkillsContainer } from './Skills.styled'

import HtmlIcon from '../../assets/skills/html-5.svg'
import CssIcon from '../../assets/skills/css-3.svg'
import SassIcon from '../../assets/skills/sass.svg'
import JsIcon from '../../assets/skills/javascript.svg'
import ReactIcon from '../../assets/skills/react.svg'
import ReduxIcon from '../../assets/skills/redux.svg'
import GatsbyIcon from '../../assets/skills/gatsby.svg'
import PwaIcon from '../../assets/skills/logo-pwa.svg'
import FirebaseIcon from '../../assets/skills/firebase.svg'
import FigmaIcon from '../../assets/skills/figma.svg'



const Skills = () => {

 
  return (
    <SkillsContainer numberElem="4">
      <ul>
        <li><img src={HtmlIcon} alt="html icon" /> <span>Html</span></li>
        <li><img src={CssIcon} alt="css icon" /> <span>Css</span></li>
        <li><img src={SassIcon} alt=" icon" style={{ width: '50px' }}/> <span></span> Sass</li>
        <li><img src={JsIcon} alt=" icon" /> <span>JavaScript</span> </li>
        <li><img src={ReactIcon} alt=" icon" /> <span>React.js</span> </li>
        <li><img src={ReduxIcon} alt=" icon" /> <span>Redux</span> </li>
        <li><img src={GatsbyIcon} alt=" icon" /> <span>Gatsby.js</span></li>
        <li><img src={PwaIcon} alt=" icon" style={{width: '60px'}}/> <span>Progressive Web App</span></li>
        <li><img src={FirebaseIcon} alt=" icon" /> <span>Firebase</span> </li>
        {/* <li><img src={MongoIcon} alt=" icon" /> <span></span> MongoDB</li>
        <li><img src={NodeIcon} alt=" icon" /> <span></span> Node.js</li>
        <li><img src={ExpressIcon} alt=" icon" /> <span></span> Express</li> */}
        <li><img src={FigmaIcon} alt=" icon" /> <span>Figma</span> </li>
      </ul>
    </SkillsContainer>
  );
};

export default Skills;