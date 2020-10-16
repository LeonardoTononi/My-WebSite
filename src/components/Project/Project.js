import React, { useRef } from "react"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"
import {
  ProjectContainer,
  Question,
  ColumnText,
  ColumnMedia,
  Title,
  ProjectsPreview,
  Wrapper,
  StyledPopup,
  CloseBtn,
  ProjectImg,
  PersonalImg,
} from "./Project.styles"

import { VscDebugBreakpointLog } from "react-icons/vsc"
import IphoneImg from "../../assets/iphone.png"
import MeImg from "../../assets/leo.png"

const DiamondIcon = <VscDebugBreakpointLog />

const Project = () => {
  const ref = useRef()
  return (
    <Wrapper>
      <Title>What I've done recently?</Title>
      <ProjectsPreview>
        <StyledPopup
          trigger={
            <button>
              <img src={IphoneImg} />
            </button>
          }
          position="center center"
          modal
          ref={ref}
        >
          <ProjectContainer>
            <CloseBtn onClick={() => ref.current.close()}>Close</CloseBtn>
            <PersonalImg src={MeImg} />
            <ColumnMedia>
              <ProjectImg src={IphoneImg} />
            </ColumnMedia>
            <ColumnText>
              <Question>
                <h4>How is called?</h4>
                <ul>
                  <li>{DiamondIcon} A Tourism web app.</li>
                </ul>
              </Question>
              <Question>
                <h4>How is built it?</h4>
                <ul>
                  <li>{DiamondIcon} JavaScript</li>
                  <li>{DiamondIcon} Firebase</li>
                  <li>{DiamondIcon} Google Maps</li>
                  <li>{DiamondIcon} Google Analytics</li>
                </ul>
              </Question>
              <Question>
                <h4>Useful links?</h4>
                <ul>
                  <li>
                    <a href="https://bestfivebcn.com/" target="_blank">
                      {DiamondIcon} Live Demo
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Easaaa/Bestfive-bcn"
                      target="_blank"
                    >
                      {DiamondIcon} Git Hub
                    </a>
                  </li>
                </ul>
              </Question>
              <Question>
                <h4>My thought about this project...</h4>
                <p>
                  I built this app because lorem ipsum dolor sit amet,
                  consectetur adip lorem, consectetur adipiscing elit.
                </p>
              </Question>
            </ColumnText>
          </ProjectContainer>
        </StyledPopup>
      </ProjectsPreview>
    </Wrapper>
  )
}

export default Project
