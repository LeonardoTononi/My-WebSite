import React, { Fragment } from "react"
import { SkillsContainer, SkillCard } from "./Skills.styled"
import { Title } from "../Project/Project.styles"
import Carousel from "../Carousel"

import HtmlIcon from "../../assets/skills/html-5.svg"
import CssIcon from "../../assets/skills/css-3.svg"
import SassIcon from "../../assets/skills/sass.svg"
import JsIcon from "../../assets/skills/javascript.svg"
import ReactIcon from "../../assets/skills/react.svg"
import ReduxIcon from "../../assets/skills/redux.svg"
import GatsbyIcon from "../../assets/skills/gatsby.svg"
import PwaIcon from "../../assets/skills/logo-pwa.svg"
import FirebaseIcon from "../../assets/skills/firebase.svg"
import FigmaIcon from "../../assets/skills/figma.svg"
import GoogleAnalyticsIcon from "../../assets/skills/google-anal.png"
import StyledCompIcon from "../../assets/skills/styled.png"
import StrapiIcon from "../../assets/skills/strapi.svg"

const skillsArray = [
  {
    name: "JavaScript",
    icon: JsIcon,
  },
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "Gatsby",
    icon: GatsbyIcon,
  },
  {
    name: "Redux",
    icon: ReduxIcon,
  },
  {
    name: "StyledCom.",
    icon: StyledCompIcon,
  },
  {
    name: "Sass",
    icon: SassIcon,
  },
  {
    name: "Firebase",
    icon: FirebaseIcon,
  },
  {
    name: "GAnalytics",
    icon: GoogleAnalyticsIcon,
  },
  {
    name: "Strapi",
    icon: StrapiIcon,
  },
  {
    name: "Html",
    icon: HtmlIcon,
  },
  {
    name: "Css",
    icon: CssIcon,
  },
  {
    name: "PWA",
    icon: PwaIcon,
  },
]

const Skills = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default Skills
