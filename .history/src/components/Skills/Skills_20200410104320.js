import React, {useEffect} from 'react';
import {SkillsContainer} from './Skills.styled'

const Skills = () => {

  useEffect(() => {
    console.log(document)
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.querySelector("ul.marquee-content");

    root.style.setProperty("--marquee-elements", marqueeContent.children.length);

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  },[])
 
  return (
    <SkillsContainer>
      <ul>
        <li>Html</li>
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