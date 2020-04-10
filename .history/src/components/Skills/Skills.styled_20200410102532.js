import styled, { keyframes } from 'styled-components'

/* export const SkillsContainer = styled.section`
  padding: 4rem 0.5rem; 
  background-color: #F2F3F5;

  ul {
    display: flex;
    overflow-x: auto; 
    flex-wrap: nowrap;
    align-items: center;

    li {
      list-style-type: none;
      margin: 0 1rem;
      flex: 0 0 auto;
      font-size: 1.4rem;
      text-align: center;
      font-weight: 300;
    }
  }
` */

const Scrolling = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-1 * 30vh * 12)); }
`

export const SkillsContainer = styled.section`
  padding: 4rem 0.5rem; 
  background-color: #F2F3F5;

  overflow: hidden;
  position: relative;

  &:before, &:after {
    position: absolute;
  top: 0;
  width: 10rem;
  height: 100%;
  content: "";
  z-index: 1;
  }

  &:before {
    left: 0;
  background: linear-gradient(to right, #fff 0%, transparent 100%);
  }

  &:after {
    right: 0;
  background: linear-gradient(to left, #fff 0%, transparent 100%);
  }

  ul {
    display: flex;
    overflow-x: auto; 
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;

    animation:${Scrolling} 20s linear infinite;

    li {
      list-style-type: none;
      margin: 0 1rem;
      flex: 0 0 auto;
      font-size: 1.4rem;
      align-items: center;
      font-weight: 300;

      flex-shrink: 0;
    }
  }
`